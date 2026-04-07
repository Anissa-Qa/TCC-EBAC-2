export class CuponsAPI {
  listarCupons() {
    return cy.request({
      method: 'GET',
      url: 'coupons',
      headers: cy.authHeader()
    })
  }

  buscarCupomPorId(id) {
    return cy.request({
      method: 'GET',
      url: `coupons/${id}`,
      headers: cy.authHeader()
    })
  }

  cadastrarCupom(body) {
    return cy.request({
      method: 'POST',
      url: 'coupons',
      headers: cy.authHeader(),
      body
    })
  }
}