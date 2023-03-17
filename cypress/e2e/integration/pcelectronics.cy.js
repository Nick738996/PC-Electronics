describe('Verify main page', function () {
  beforeEach(function () {
    cy.visitPage('pcelectronics.html');
  });
  it('Should have a logo', function () {
    cy.title().should('eq', 'PC Electronics');
    cy.validateClickableElements(
      'navbar-brand',
      'PC Electronics',
      './pcelectronics.html'
    );
  });
  it('Should have Inicio button', function () {
    cy.validateElementVisibility('"nav navbar-nav navbar-right"');
    cy.validateClickableElements('active', 'Inicio', './pcelectronics.html');
  });
  it('Should have Administrador dropdown', function () {
    cy.validateDropdowns(
      'dropdown-toggle-1',
      'Administrador',
      '#',
      '[data-cy="dropdown-menu-1"]',
      5
    );
  });
  it('Should have database services', function () {
    cy.validateDataBase(
      'Eliminar Base de Datos',
      'Base de datos eliminada Satisfactoriamente'
    );
    cy.validateDataBase(
      'Crear Base de Datos',
      'Base de Datos Creada Satisfactoriamente'
    );
    cy.validateDataBase('Crear Tabla', 'Tabla29 creada Satisfactoriamente');
    cy.validateDataBase(
      'Crear BackUp',
      'Se ha realizado el BackUp correctamente'
    );
    cy.validateDataBase(
      'Crear BackUp',
      'Se ha realizado el BackUp correctamente'
    );
  });
  it('Should have Inventario dropdown', function () {
    cy.validateDropdowns(
      'dropdown-toggle-2',
      'Inventario',
      '#',
      '[data-cy="dropdown-menu-2"]',
      4
    );

    it('Should have Utilidades dropdown', function () {
      cy.validateDropdowns(
        'dropdown-toggle-3',
        'Utilidades',
        '#',
        '[data-cy="dropdown-menu-3"]',
        2
      );
    });
    it('Should have the table', function () {
      cy.getByData('"container mt-3"')
        .should('be.visible')
        .find('h2')
        .then(table => {
          expect(table.text()).to.equal('Tabla de Usuarios');
        });
      cy.contains(
        'p',
        'Esta tabla contiene la relacion de usuarios con acceso al aplicativo web:'
      );
      cy.getByData('"table table-bordered"')
        .find('tr')
        .then(tableHeader => {
          cy.wrap(tableHeader)
            .invoke('prop', 'innerText')
            .should('contain', 'Nombre\tApellido\tCorreo');
        });
      cy.validateTableContent(
        'Brandon',
        'Brandon\tGomez\tbngomezay@unadvirtual.edu.co'
      );
      cy.validateTableContent(
        'Juan',
        'Juan\tDIaz\tjcdiazto@unadvirtual.edu.co'
      );
      cy.validateTableContent(
        'Deyninson',
        'Deyninson\tRodriguez\tdjrodriguezmel@unadvirtual.edu.co'
      );
      cy.getByData('img-pcelectronics-home')
        .should('be.visible')
        .and(
          'have.attr',
          'src',
          'https://icon-library.com/images/electronics-icon-png/electronics-icon-png-5.jpg'
        );
      cy.contains('b', 'Todo los Derechos Reservados ©')
        .siblings('p')
        .should('have.text', 'SIGUENOS');
    });
  });
});

describe('Verify ingresar producto page', function () {
  beforeEach(function () {
    cy.visitPage('ingresar-producto.html');
    cy.fixture('products.json').as('products');
  });
  it('Should have a form to add a product', function () {
    cy.validateProductForm('Ingresar Producto Nuevo', 'ingresar-producto');
  });
  it('Should add a product to the database', function () {
    cy.addInput('1', 'Codigo del Producto', this.products.product1.id);
    cy.addInput('2', 'Nombre del Producto', this.products.product1.name);
    cy.addInput('3', 'Marca del Producto', this.products.product1.brand);
    cy.addInput(
      '4',
      'Precio de compra del Producto',
      this.products.product1.price
    );
    cy.addInput(
      '5',
      'Cantidad comprada del Producto',
      this.products.product1.quantity
    );
    cy.submitButton('Producto Creado Satisfactoriamente');
    cy.clearInput();
    cy.addInput('1', 'Codigo del Producto', this.products.product2.id);
    cy.addInput('2', 'Nombre del Producto', this.products.product2.name);
    cy.addInput('3', 'Marca del Producto', this.products.product2.brand);
    cy.addInput(
      '4',
      'Precio de compra del Producto',
      this.products.product2.price
    );
    cy.addInput(
      '5',
      'Cantidad comprada del Producto',
      this.products.product2.quantity
    );
    cy.submitButton('Producto Creado Satisfactoriamente');
  });
});

describe('Verify actualizar producto page', function () {
  beforeEach(function () {
    cy.visitPage('actualizar-producto.html');
    cy.fixture('products.json').as('products');
  });
  it('Should have a form to update a product', function () {
    cy.validateProductForm('Actualizar Producto', 'actualizar-producto');
  });
  it('Should update a product to the database', function () {
    cy.addInput('1', 'Codigo del Producto', this.products.product1.id);
    cy.addInput('2', 'Nombre del Producto', this.products.product3.name);
    cy.addInput('3', 'Marca del Producto', this.products.product3.brand);
    cy.addInput(
      '4',
      'Precio de compra del Producto',
      this.products.product3.price
    );
    cy.addInput(
      '5',
      'Cantidad comprada del Producto',
      this.products.product3.quantity
    );
    cy.submitButton('Producto Actualizado Satisfactoriamente');
    cy.clearInput();
  });
});

describe('Verify eliminar producto page', function () {
  beforeEach(function () {
    cy.visitPage('eliminar-producto.html');
    cy.fixture('products.json').as('products');
  });
  it('Should have a form to delete a product', function () {
    cy.getByData('col-sm-6').contains('h2', 'Eliminar Producto');
    cy.validateElementVisibility('img-eliminar-producto');
  });
  it('Should delete a product from the database', function () {
    cy.addInput('1', 'Codigo del Producto', this.products.product3.id);
    cy.submitButton('Registro Eliminado Satisfactoriamente');
    cy.clearInput();
  });
});

describe('Verify consultar producto page', function () {
  beforeEach(function () {
    cy.visitPage('consultar-producto.html');
    cy.fixture('products.json').as('products');
  });
  it('Should have a form to search a product', function () {
    cy.getByData('col-sm-6').contains('Consultar Producto');
    cy.validateElementVisibility('img-consultar-producto');
  });
  it('Should search an existing product from the database', function () {
    cy.addInput('1', 'Codigo del Producto', this.products.product2.id);
    cy.submitButton(
      'Codigo: 9083\nNombre: Keyboard\nMarca: Logitech\nPrecio: 150000\nCantidad: 2\n'
    );
    cy.clearInput();
  });
  it('Should search a non existing product from the database', function () {
    cy.addInput('1', 'Codigo del Producto', this.products.product3.id);
    cy.submitButton('0 resultados');
  });
});

describe('Verify valor de venta de producto page', function () {
  beforeEach(function () {
    cy.visitPage('/calculadora-venta.html');
    cy.fixture('products.json').as('products');
  });
  it('Should have a form to calculate the sale value', function () {
    cy.validateProductForm(
      'Calculadora del Valor de Venta',
      'calculadora-venta'
    );
  });
  it('Should calculate the sale value', function () {
    cy.addInput('1', 'Valor de Compra', this.products.product1.price);
    cy.addInput(
      '2',
      '% Utilidad o Ganancia',
      this.products.product1.percentage
    );
    cy.getByData('valor-iva')
      .invoke('prop', 'placeholder')
      .should('contain', this.products.iva);
    cy.getByData('calcular').click();
    cy.validateInput('4', 'Valor de Venta');
    cy.validateInput('5', 'Ganancia');
    cy.clearInput();
  });
});
describe('Verify equivalencia entre tamaño de datos page', function () {
  beforeEach(function () {
    cy.visitPage('/equivalencia-datos.html');
  });
  it('Should have a form to convert size equivalence', function () {
    cy.getByData('col-sm-6').contains('Conversor de Equivalencia de Tamaño');
    cy.validateElementVisibility('img-equivalencia-datos');
  });
  it('Should convert Bytes to every size equivalence', function () {
    cy.selectUnit('Byte');
    cy.convertValue('234200');
    cy.validateConversion();
  });
  it('Should convert Kilobytes to every size equivalence', function () {
    cy.selectUnit('Kilobyte');
    cy.convertValue(Math.round(Math.random() * 100000));
    cy.validateConversion();
  });
  it('Should convert Megabytes to every size equivalence', function () {
    cy.selectUnit('Megabyte');
    cy.convertValue(Math.round(Math.random() * 10000));
    cy.validateConversion();
  });
  it('Should convert Gigabytes to every size equivalence', function () {
    cy.selectUnit('Gigabyte');
    cy.convertValue(Math.round(Math.random() * 1000));
    cy.validateConversion();
  });
  it('Should convert Terabytes to every size equivalence', function () {
    cy.selectUnit('Terabyte');
    cy.convertValue(Math.round(Math.random() * 100));
    cy.validateConversion();
  });
});
