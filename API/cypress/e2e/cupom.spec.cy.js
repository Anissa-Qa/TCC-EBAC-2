describe('US-0003 - API de Cupons', () => {

  const headers = {
    authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
  }

  it('GET - Deve listar todos os cupons cadastrados', () => {
    cy.request({
      method: 'GET',
      url: 'coupons',
      headers
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
    })
  })

  it('POST - Deve cadastrar um novo cupom com sucesso', () => {
    cy.fixture('cupom').then((cupom) => {
      const body = {
        ...cupom,
        code: `Ganhe10_${Date.now()}`
      }

      cy.request({
        method: 'POST',
        url: 'coupons',
        headers,
        body
      }).then((response) => {
        expect(response.status).to.equal(201)
        expect(response.body.code).to.equal(body.code.toLowerCase())
        expect(response.body.amount).to.equal(body.amount)
        expect(response.body.discount_type).to.equal(body.discount_type)
      })
    })
  })
})