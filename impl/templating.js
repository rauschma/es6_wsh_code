export const template = (persons) =>
`<table>
${persons.map(
    ({last,first}) =>
        `    <tr><td>${last}</td><td>${first}</td></tr>`)
    .join('\n')}
</table>`;