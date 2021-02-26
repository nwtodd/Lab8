describe('Party Horn Tests', () => {
  beforeEach(() => {
    // cy.visit('http://127.0.0.1:5500/');
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Changing image and sound sources', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Test volume icon changes from level 0 to level 1', () => {
    cy.get('#volume-slider')
      .invoke('val', 0)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
    cy.get('#volume-slider')
      .invoke('val', 10)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Test volume icon changes from level 1 to level 2', () => {
    cy.get('#volume-slider')
      .invoke('val', 20)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-slider')
      .invoke('val', 40)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  }); 

  it('Test volume icon changes from level 2 to level 3', () => {
    cy.get('#volume-slider')
      .invoke('val', 40)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-slider')
      .invoke('val', 70)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });  

  it('Honk button disabled upon empty or non-number textbox', () => {
    cy.get('#volume-slider')
      .invoke('val', 0)
      .trigger('input');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });

    cy.get('#volume-number')
      .invoke('val', 'c')
      .trigger('input');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Error thrown if input volume out of range', () => {
    cy.get('#volume-number')
      .invoke('val', 101)
      .trigger('input');
    cy.get('[type="submit"]').click()
    cy.get('input:invalid').should('have.length', 1)
    cy.get('#volume-number').then(($input) => {
      expect($input[0].validationMessage).to.eq('Value must be less than or equal to 100.')
    });
  });


});
