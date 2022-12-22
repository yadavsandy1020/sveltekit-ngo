export function load() {
	return {
		qr: {
			img: 'qr.png'
		},
		bank: {
			bankName: 'Union Bank of India',
			accountNumber: '665801010050379',
			accountHolderName: 'Shree Royal Krishna Foundation',
			ifscCode: 'UBIN0566586',
			upi: [
				{ name: 'GooglePay', number: '9119790714' },
				{ name: 'PayTM', number: '9119790714' },
				{ name: 'PhonPe', number: '9119790714' }
			]
		}
	};
}
