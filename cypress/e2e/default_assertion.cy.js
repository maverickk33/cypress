describe("default assertions", () => {
  it("its()", () => {
    let obj = {};
    setTimeout(() => {
      obj.foo = "Bar";
    }, 3000);
    cy.wrap(obj).its("foo");
  });
  // It is for assertions like should() and and()
  it("should() and and()", () => {
    cy.get("div").should("not.have.text", "\n  \n\n\n\n\n  \n  \n  ");
  });

  it("external subject", () => {
    expect("a").to.have.attr("href");
  });
});
