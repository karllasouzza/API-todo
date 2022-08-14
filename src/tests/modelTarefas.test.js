import Tarefas from "../models/Tarefas.js";

test("Teste de Status pendente", () => {
  expect(Tarefas.validStatus("Pending")).toBe("Pending");
});

test("Teste de Status inexistente", () => {
  expect(Tarefas.validStatus("a")).toBe("Status inexistente");
});

test("Teste de Status realizado", () => {
  expect(Tarefas.validStatus("Complete")).toBe("Complete");
});

test("Teste de Status não realizado", () => {
  expect(Tarefas.validStatus("Not Complete")).toBe("Not Complete");
});
