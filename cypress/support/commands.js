//const selector = require("../fixtures/selector.json");

Cypress.Commands.add(
  "createUser",
  (id, username, firstName, lastName, email, password, phone, userStatus) => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: {
        id: id,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        userStatus: userStatus,
      },
    });
  });

  Cypress.Commands.add(
    "update",
    (id, username, firstName, lastName, email, password, phone, userStatus) => {
      cy.request({
        method: "PUT",
        url: "https://petstore.swagger.io/v2/user/RudaDi",
        body: {
          id: id,
          username: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phone: phone,
          userStatus: userStatus,
        },
      });
    });

    Cypress.Commands.add(
        "delete",
        (username) => {
          cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/user/RudaDi",
          });
        });
