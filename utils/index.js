export const uniqueID = () => Math.floor(Math.random() * 10000000) + 1;

export const TransactionData = [
    {
        id: uniqueID,
        name: "Chukwudi Joshua",
        bank: 'Wema Bank',
        amount: "₦200.00",
        timestamp: `2023-12-08T17:49:59+01:00`,
    },
    {
        id: uniqueID,
        name: "Okey Bassey",
        bank: 'Eco Bank',
        amount: "₦800.00",
        timestamp: `2024-02-12T17:49:59+01:00`,
    },
    {
        id: uniqueID,
        name: "James Jake",
        bank: 'Union Bank',
        amount: "₦80.00",
        timestamp: `2024-01-21T17:49:59+01:00`,
    },
    {
        id: uniqueID,
        name: "Ify Nkechi",
        bank: 'First Bank',
        amount: "₦3900.00",
        timestamp: `2024-01-11T17:49:59+01:00`,
    },
    {
        id: uniqueID,
        name: "Nkiru Jennifer",
        bank: 'Access Bank',
        amount: "₦900.00",
        timestamp: `2024-02-14T17:49:59+01:00`,
    },
]