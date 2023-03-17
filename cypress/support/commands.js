/// <reference types="Cypress" />
Cypress.Commands.add('getByData', selector => {
  return cy.get(`[data-cy=${selector}]`);
});

// PC Electronics main page
Cypress.Commands.add('visitPage', page => {
  cy.clearAllCookies();
  cy.visit(page);
});

Cypress.Commands.add(
  'validateClickableElements',
  function (selector, text, href) {
    cy.getByData(selector)
      .should('have.text', text)
      .and('have.attr', 'href', href);
  }
);

Cypress.Commands.add(
  'validateDropdowns',
  function (selector, text, href, sibling, length) {
    cy.validateClickableElements(selector, text, href)
      .click()
      .siblings(sibling)
      .find('li')
      .should('have.length', length);
  }
);

Cypress.Commands.add(
  'validateTableContent',
  function (firstColumnValue, innerText) {
    cy.contains('td', firstColumnValue)
      .parent('tr')
      .invoke('prop', 'innerText')
      .should('contain', innerText);
  }
);

Cypress.Commands.add('validateDataBase', function (text, dataBaseMsg) {
  cy.getByData('dropdown-toggle-1').click();
  cy.contains('a', text).click();
  cy.get('body')
    .invoke('prop', 'innerText')
    .then(dataBaseBody => {
      if (dataBaseBody !== 'Base de datos eliminada Satisfactoriamente') {
        cy.log('Error, la base de datos no pudo ser eliminada');
        cy.go('back');
      } else {
        cy.log('La base de datos fue eliminada con exito');
        cy.go('back');
      }
    });
});
Cypress.Commands.add('validateElementVisibility', function (selector) {
  cy.getByData(selector).should('be.visible');
});
Cypress.Commands.add('validateProductForm', (title, imgSel) => {
  cy.getByData('col-sm-6')
    .should('contain', title)
    .find('div.form-group')
    .and('have.length', 5);
  cy.validateElementVisibility(`img-${imgSel}`);
});

Cypress.Commands.add('addInput', function (selectorNumber, label, data) {
  cy.getByData(`form-group-${selectorNumber}`)
    .contains(label)
    .siblings('input')
    .then(inputField => {
      cy.wrap(inputField)
        .type(data)
        .invoke('prop', 'value')
        .should('contain', data);
    });
});
Cypress.Commands.add('submitButton', function (message) {
  cy.get('[type="submit"]').click();
  cy.get('body')
    .invoke('prop', 'innerText')
    .then(addedProductTxt => {
      if (addedProductTxt !== message) {
        cy.wrap(addedProductTxt).should('to.be.equal', message);
        cy.log(`ERROR! No se pudo realizar la accion`);
        cy.go('back');
      } else {
        cy.log(`La accion se realizo exitosamente!`);
        cy.go('back');
      }
    });
});
Cypress.Commands.add('clearInput', function () {
  cy.getByData('limpiar').click();
  cy.get('input').then(inputText => {
    expect(inputText.val()).to.equal('');
  });
});

Cypress.Commands.add('validateInput', function (selectorNumber, label) {
  cy.getByData(`form-group-${selectorNumber}`)
    .contains(label)
    .siblings('input')
    .then(inputField => {
      cy.wrap(inputField)
        .invoke('prop', 'value')
        .then(inputValue => {
          expect(inputValue).to.equal(inputValue);
        });
    });
});
Cypress.Commands.add('selectUnit', function (unit) {
  cy.contains('label', 'Unidad de Partida:')
    .siblings('[data-cy="unidad-partida"]')
    .then(dropdown => {
      cy.wrap(dropdown).select(unit);
    });
});

Cypress.Commands.add('convertValue', function (value) {
  cy.contains('td', 'Valor a Convertir:')
    .parent('tr')
    .find('[data-cy="datos-convertir"]')
    .then(inputForData => {
      cy.wrap(inputForData)
        .type(value)
        .invoke('prop', 'value')
        .should('contain', value);
    });
  cy.getByData('calcular-equivalencia').click();
});

Cypress.Commands.add('validateConversion', function () {
  const units = ['Byte', 'Kilobyte', 'Megabyte', 'Gigabyte', 'Terabyte'];
  for (let i = 0; i < units.length; i++) {
    cy.contains('td', units[i])
      .siblings('td')
      .find('input')
      .invoke('prop', 'value')
      .then(inputValue => {
        expect(inputValue).to.eq(inputValue);
      });
  }
  cy.clearInput();
});
