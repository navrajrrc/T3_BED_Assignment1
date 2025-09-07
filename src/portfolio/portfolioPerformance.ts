interface portfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}


export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
): portfolioPerformance{

    const profitOrLoss = currentValue - initialInvestment;

    let percentageChange: number;

    switch (true) {
        case initialInvestment === 0:
        percentageChange = 0;
        break;

        default:
        percentageChange = (profitOrLoss/ initialInvestment) * 100
    }

    let performanceSummary: string;
    
    switch (true) {
        case percentageChange >= 20:
            performanceSummary = `Gained singnificantly with a profit of $${profitOrLoss}`
            break;

        case percentageChange >= 10 && percentageChange < 20:
            performanceSummary = `Moderately gained by $${profitOrLoss}`
            break;

        case percentageChange >= 0.1 && percentageChange <10:
            performanceSummary = `Significantly gained by $${profitOrLoss}`
            break;
        
        case percentageChange === 0:
            performanceSummary = `No change`
            break;

        case percentageChange <= -0.1 && percentageChange > -10:
            performanceSummary = `Lost significantly by $${profitOrLoss}`
            break;

        case percentageChange <= -10 && percentageChange > -20:
            performanceSummary = ` Lost moderately by $${profitOrLoss}`
            break;

        default: 
            performanceSummary = `Lost significantly by $${profitOrLoss}`

    }
    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}