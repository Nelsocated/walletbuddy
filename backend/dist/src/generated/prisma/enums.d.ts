export declare const Period: {
    readonly weekly: "weekly";
    readonly monthly: "monthly";
};
export type Period = (typeof Period)[keyof typeof Period];
export declare const Type: {
    readonly expense: "expense";
    readonly income: "income";
};
export type Type = (typeof Type)[keyof typeof Type];
export declare const Category: {
    readonly food: "food";
    readonly transport: "transport";
    readonly shopping: "shopping";
    readonly utilities: "utilities";
    readonly work: "work";
    readonly health: "health";
    readonly allowance: "allowance";
    readonly salary: "salary";
    readonly gift: "gift";
    readonly refund: "refund";
    readonly others: "others";
};
export type Category = (typeof Category)[keyof typeof Category];
