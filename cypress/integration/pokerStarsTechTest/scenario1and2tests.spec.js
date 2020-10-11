/// <reference types="cypress"/>

const DARTS_NAV_ID = "[id='sportList__link__darts']"
const DARTS_DIV_SELECTOR = '.market.h2h.in-play.active.darts'
const RUGBY_NAV_ID = "[id='sportList__link__rugby_union']"
const RUGBY_UNION_DIV_SELECTOR = '.market.h2h.in-play.active.rugby_union'

context('Given I go to the PokerStars Home Page', () => {

    beforeEach(() => {
        cy.visitPokerStars()
    })

    describe('When the first Premier League Darts event is navigated to', () => {

        beforeEach(() => {
            cy.setupPokerStarsDartsRoutes()
        })

        it('Then its GET Request URL status is verified', () => {
            cy.get(DARTS_NAV_ID).click()
            cy.url().should('include', '/#/darts/competitions')
            cy.wait('@getComp').its('status').should('eq', 200)

            cy.get('.innerList.basicList').children().eq(1).click()
            cy.get('.titleBreadcrumbs__text.titleBreadcrumb__pageTitle').should('be.visible')
            cy.get('.titleBreadcrumbs').contains('Premier League')

            cy.get(DARTS_DIV_SELECTOR).find('li').eq(0).find('a').eq(0).as('firstMatch')
            cy.waitFor('@firstMatch')

            cy.get('@firstMatch').click()
            cy.wait('@getEvent').its('status').should('eq', 200)
        })
    })

    describe('When the first Rugby Union event is navigated to', () => {
        it('Bets can be added and deleted on that event', () => {
            cy.get(RUGBY_NAV_ID).click()
            cy.get(RUGBY_UNION_DIV_SELECTOR).find('li').eq(0).find('a').eq(0).as('firstBet')
            cy.get('@firstBet').click()

            cy.get('.selectionBody.collapseToggle__content').find('a').eq(0).as('firstTeamWinBet')

            cy.get('@firstTeamWinBet').find('.button__bet__title').invoke('text').then((matchText) => {
                cy.get('@firstTeamWinBet').click()
                cy.get('.betslipToggle').click()
                cy.get('.horizontalMenu__link__counter').contains('(1)')

                cy.get('.selection__name').invoke('text').should((text2) => {
                    expect(text2).to.equalIgnoreSpaces(matchText)
                })
            })

            cy.get('.remove').click()
            cy.get('.selection__name').should('not.be.visible')
            cy.get('.horizontalMenu__link__counter').contains('(0)')
        })
    })
})
