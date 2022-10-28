global.config = { urlBack: "http://localhost:8080/esieaBack/rest", ligneParPage : 12 }

const { calculerNbPages } = require('../main/webapp/stockcar')

test('Test du calcul du nombre de pages', () => {
	expect(calculerNbPages(120)).toBe(10);
	expect(calculerNbPages(121)).toBe(11);
})