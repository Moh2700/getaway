






/**
 * Demonstrates Encapsulation using Private Fields (#) and Property Access (get/set).
 * This structure provides controlled access to private data using a simpler syntax.
 */
class BankAccount {
    // 1. Data (Attribute) - Made Strictly Private
    #balance; 

    // Constructor: Initializes the object's state
    constructor(initialBalance = 0.0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this.#balance = initialBalance;
        console.log(`Account created with initial balance: $${this.#balance.toFixed(2)}`);
    }

    // --- Accessor/Mutator using 'get' and 'set' ---
    
    // 2. Accessor (Getter) - Defined using the `get` keyword
    // This allows reading the private data using property-style syntax (e.g., account.currentBalance)
    get currentBalance() {
        // We use the getter to return the value of the private field
        return this.#balance;
    }

    // 3. Mutator (Setter) - Defined using the `set` keyword
    // This allows controlled modification of the private data using property-style syntax.
    // NOTE: This setter is only for direct balance adjustment, not deposits/withdrawals.
    set currentBalance(newBalance) {
        // Encapsulated Validation: Only allow setting if the new value is non-negative.
        if (newBalance >= 0) {
            this.#balance = newBalance;
            console.log(`[SETTER] Balance successfully updated to: $${this.#balance.toFixed(2)}`);
        } else {
            console.error("[SETTER] Cannot set balance to a negative value. Setter blocked the operation.");
        }
    }


    // --- Traditional Methods (Mutators/Setters) ---

    // 4. Traditional Method: Deposit
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount.toFixed(2)}. New balance: $${this.#balance.toFixed(2)}`);
        } else {
            console.log("Deposit failed: amount must be positive.");
        }
    }

    // 5. Traditional Method: Withdraw (with business logic)
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew $${amount.toFixed(2)}. New balance: $${this.#balance.toFixed(2)}`);
            return true;
        } else {
            console.log("Withdrawal failed: Insufficient funds or invalid amount.");
            return false;
        }
    }

    // 6. Behavior (Method) - Declared using Fat Arrow Syntax
    // Students will see both traditional and arrow function methods used in JS classes.
    checkStatus = () => {
        if (this.#balance >= 1000) {
            return "Status: Healthy";
        } else {
            return "Status: Low Balance";
        }
    }
}

// --- Demonstration of get/set ---

const myAccount = new BankAccount(500.00);

console.log("\n--- Using Getters and Setters ---");

// Use the **Getter** (acts like reading a property)
// We call it as a property, NOT a function: myAccount.currentBalance
let balance = myAccount.currentBalance;
console.log(`1. Current Balance (via GETTER): $${balance.toFixed(2)}`);

// Use the **Setter** (acts like assigning a value to a property)
// The setter method runs in the background, applying the validation logic.
myAccount.currentBalance = 1200.00;

// Attempting to use the setter to assign an invalid value
myAccount.currentBalance = -100.00; // The setter logic prevents this change!

// Check the balance again
console.log(`2. Current Balance (after setter attempt): $${myAccount.currentBalance.toFixed(2)}`);

// Standard method call (for comparison)
myAccount.withdraw(200);
console.log(`3. Final Status: ${myAccount.checkStatus()}`);

// The key takeaway is that both `get/set` and traditional methods like `deposit()` 
// serve the same purpose: providing controlled, encapsulated access to the `#balance`.