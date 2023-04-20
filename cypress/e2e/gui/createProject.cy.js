import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(() => {
    cy.login()
  })

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.gui_createProject(project)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})

//1 - describe (teste e dados em si, usar faker para gerar dados)
//2 - beforeEach (executar testes antes de inicar [como o login ou outra funcionalidade necessaria])
//3 - it (sucesso), com os testes em si, sempre referenciando o objeto utilizado no descibre + os campos, tambem utilizados