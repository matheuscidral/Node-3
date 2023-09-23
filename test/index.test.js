const { describe, expect, it } = require("@jest/globals");
const ServicoExercicio = require("../src/services/ex");

describe("Testes do primeiro exercício", () => {
  const servico = new ServicoExercicio();

  beforeAll(async () => {
    console.info("Iniciando TDD com jest!");
  });

  afterAll(() => {
    console.info("Encerrados os testes");
  });

  it("Should add a name", () => {
    const qtde = servico.PegarTodos().length;
    servico.Adicionar("João");
    const qtdeAfter = servico.PegarTodos().length;

    expect(qtdeAfter).toBe(qtde + 1);
  });

  it("Should add a name", () => {
    const nome = "Lucas";
    servico.Adicionar(nome);

    const addedNome = servico.PegarUm(servico.PegarTodos().length - 1);
    console.log(addedNome);
    expect(nome).toBe(addedNome);
  });
});
