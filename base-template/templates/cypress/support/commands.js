Cypress.Commands.add("terminalLog", (violations) => {

  cy.task(
    "log",
    `${violations.length} accessibility violation${violations.length === 1 ? "" : "s"
    } ${violations.length === 1 ? "was" : "were"} detected`
  );

  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    })
  );
  cy.task("table", violationData);
});

const severityIndicators = {
  minor: '⚪ [MINOR]',
  moderate: '🟡 [MODERATE]',
  serious: '🟠 [SERIOUS]',
  critical: '🔴 [CRITICAL]',
}

Cypress.Commands.add("violations", (violations) => {
  violations.forEach(violation => {
    const nodes = Cypress.$(violation.nodes.map(node => node.target).join(','))
    Cypress.log({
      name: `${severityIndicators[violation.impact]}  `,
      $el: nodes,
      message: `[${violation.help}](${violation.helpUrl})`
    })
    violation.nodes.forEach(({ target }) => {
      Cypress.log({
        name: '🛠',
        consoleProps: () => violation,
        $el: Cypress.$(target.join(',')),
        message: target
      })
    })
  });
})