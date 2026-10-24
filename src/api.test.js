import { afterEach, describe, expect, it, vi } from "vitest";
import {
  createAppointment,
  getAppointments,
  updateAppointment,
  patchAppointment,
  deleteAppointment,
} from "./api.js";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Clinic appointment API", () => {
  it("GET fetches and returns appointments", async () => {
    const appointments = [{ id: 1, appointmentPatient: "Aisha" }];

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => appointments,
      })
    );

    await expect(getAppointments()).resolves.toEqual(appointments);
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/appointments"
    );
  });

  it("GET throws an error when the request fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false })
    );

    await expect(getAppointments()).rejects.toThrow(
      "Failed to fetch appointments"
    );
  });
  it("POST creates an appointment", async () => {
    const appointment = { appointmentPatient: "Test Patient" };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ id: 1, ...appointment }),
      })
    );

    await expect(createAppointment(appointment)).resolves.toEqual({
      id: 1,
      ...appointment,
    });

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/appointments",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify(appointment),
      })
    );
  });

  it("PUT replaces an appointment", async () => {
    const appointment = { appointmentPatient: "Updated Patient" };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ id: 1, ...appointment }),
      })
    );

    await expect(updateAppointment(1, appointment)).resolves.toEqual({
      id: 1,
      ...appointment,
    });

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/appointments/1",
      expect.objectContaining({
        method: "PUT",
        body: JSON.stringify(appointment),
      })
    );
  });

  it("PATCH updates selected appointment fields", async () => {
    const updates = { appointmentTime: "18:00" };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ id: 1, ...updates }),
      })
    );

    await expect(patchAppointment(1, updates)).resolves.toEqual({
      id: 1,
      ...updates,
    });

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/appointments/1",
      expect.objectContaining({
        method: "PATCH",
        body: JSON.stringify(updates),
      })
    );
  });

  it("DELETE removes an appointment", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: true })
    );

    await expect(deleteAppointment(1)).resolves.toBe(true);

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/appointments/1",
      { method: "DELETE" }
    );
  });
});