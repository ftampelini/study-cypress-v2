import { faker } from '@faker-js/faker'

describe('Create Issue', () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  beforeEach(() => {
    cy.login()
    cy.gui_createProject(issue.project)
  })

  it('successfully', () => {
    cy.gui_createIssue(issue)

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})



//1 - describe (teste e dados em si, usar faker para gerar dados)
//2 - beforeEach (executar testes antes de inicar [como o login ou outra funcionalidade necessaria])
//3 - it (sucesso), com os testes em si, sempre referenciando o objeto utilizado no descibre + os campos, tambem utilizados