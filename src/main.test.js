import { beforeEach, describe, expect, it, vi } from "vitest";

const { createAppointment, getAppointments, deleteAppointment } =
  vi.hoisted(() => ({
    createAppointment: vi.fn(),
    getAppointments: vi.fn(),
    deleteAppointment: vi.fn(),
  }));

vi.mock("./api.js", () => ({
  createAppointment,
  getAppointments,
  deleteAppointment,
  updateAppointment: vi.fn(),
  patchAppointment: vi.fn(),
}));

beforeEach(() => {
  document.body.innerHTML = "";
  vi.resetModules();
  vi.clearAllMocks();

  getAppointments.mockResolvedValue([]);
  createAppointment.mockResolvedValue({ id: 1 });
  deleteAppointment.mockResolvedValue(true);

  vi.stubGlobal("alert", vi.fn());
  vi.stubGlobal("confirm", vi.fn(() => true));
});

describe("Clinic website JavaScript", () => {
  it("sets the minimum appointment date to today", async () => {
    document.body.innerHTML = `
      <input id="appointment-date" type="date">
    `;

    await import("./main.js");

    const dateInput = document.getElementById("appointment-date");
    const today = new Date().toISOString().split("T")[0];

    expect(dateInput.min).toBe(today);
  });

  it("displays a message when there are no appointments", async () => {
    document.body.innerHTML = `
      <div id="appointments-list"></div>
    `;

    await import("./main.js");

    await vi.waitFor(() => {
      expect(
        document.getElementById("appointments-list").textContent
      ).toContain("No appointments have been booked yet.");
    });
  });

  it("displays a saved appointment", async () => {
    getAppointments.mockResolvedValue([
      {
        id: 1,
        appointmentPatient: "Test Patient",
        appointmentDate: "2026-11-01",
        appointmentDoctor: "Dr Ridhwan",
      },
    ]);

    document.body.innerHTML = `
      <div id="appointments-list"></div>
    `;

    await import("./main.js");

    await vi.waitFor(() => {
      const list = document.getElementById("appointments-list");

      expect(list.textContent).toContain("Test Patient");
      expect(list.textContent).toContain("2026-11-01");
      expect(list.textContent).toContain("Dr Ridhwan");
    });
  });
});