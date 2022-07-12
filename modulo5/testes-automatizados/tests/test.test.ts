import { performPurchase, User } from "../src"

test("1 - Testing balance greater than value: input balance: 300 -> expected: 160", () => {
	const user: User = {
		name: "Lay",
		balance: 300
	}

	const result = performPurchase(user, 140)
	
	expect(result).toEqual({
		name: "Lay",
		balance: 160
	})
})

test("2 - Testing balance greater than value: : input balance: 500 -> expected: 0", () => {
	const user: User = {
		name: "Lay",
		balance: 500
	}

	const result = performPurchase(user, 500)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

test("3 - Testing balance greater than value: input balance: 30 -> expected: undefined", () => {
	const user: User = {
		name: "Lay",
		balance: 30
	}

	const result = performPurchase(user, 5000)
	
	expect(result).not.toBeDefined()
})