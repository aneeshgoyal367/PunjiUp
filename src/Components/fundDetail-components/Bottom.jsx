import { React } from 'react'
import { Link, useRouteMatch, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function Bottom(props) {
    let mystyle = { textAlign: "left" }
    // console.log(props.id);
    return (
        <div className="hii">
            {/* <img src="assets/photos/SBIMF.png" alt="image1" className="pici"></img> */}
            <h1 style={mystyle}>{props.id[0].FundName}</h1>
            {/* <span className="fa fa-star checked1" ></span>
            <span className="fa fa-star checked1" ></span>
            <span className="fa fa-star checked1" ></span>
            <span className="fa fa-star checked1" ></span>
            <span className="fa fa-star checked1" ></span>
            <h7>(Rated by Value Research)</h7> */}
            <br />
            <h6>PLAN: GROWTH | TYPE : OPEN-ENDED | OPTION: Growth</h6>
            <br />
            <div className="hr1"></div>
            <br/>
            
                <h6>1 Yr return&nbsp;&nbsp;&nbsp;&nbsp;3 Yrs CAGR returns&nbsp;&nbsp;&nbsp;&nbsp;5 Yrs CAGR returns</h6>
                <h6 className="col">&nbsp; {props.id[0].OneYrReturn}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.id[0].ThreeYrsCAGRReturns}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {props.id[0].FiveYrsCAGRReturns}</h6>
                <br/>
                <h6>NAV as on 03 Aug&nbsp;&nbsp;&nbsp;&nbsp;Expense ratio&nbsp;&nbsp;&nbsp;&nbsp;Exit load</h6>
                <h6 className="col">&nbsp;&nbsp;{props.id[0].Nav}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.id[0].ExpenseRatio}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{props.id[0].ExitLoad}</h6>
    <br/>
    <h6>Fund Size (Cr)</h6>
    <h6 className="col">{props.id[0].FundSize}</h6>
    

    
    
    {/* <h6>->About {props.id.FundName}</h6>
    <p>{props.show.FundName} aims to provide investors with opportunities for long-term capital growth and liquidity of an open-ended scheme while investing predominantly in a well diversified basket of equity stocks. If you are an investor who believes in the market wisdom of high risk fetching higher returns, then {props.show.FundName} is one that you may consider investing in the long term.<br/>
    Benchmarked against S&P BSE Small Cap, the scheme follows a bottom-up approach to select the small cap funds and companies. Having performed remarkably well in the past years, the fund is known to ensure competitive advantage, return on investments made, growth, management, and valuation in its portfolio.</p>
    <h6>->Who Should Invest?</h6>
    <ul>
        <li>Small cap funds are popular among retail investors owing to the potential for generating high returns. Investing via SIP will help you benefit from the power of compounding and rupee cost averaging</li>
        <li>Since the fund has a diversified portfolio it will work well for you if you are an aggressive investor; this allows for some amount of risk mitigation as well</li>
        <li>Being a small cap fund, there is a relatively high level of risk involved in this fund. Hence, if you are willing to take such risk in exchange for better returns in the long term (5 to 7 years), then you may consider investing this fund</li>
        <li>If you are one among the risk-averse investors, it is suggested that you invest in large-cap funds such as Axis Bluechip Fund or SBI Bluechip Fund that involve lesser amount of risk.</li>
    </ul>
    <h6>->Will You Pay Tax?</h6>
    <p>If you have invested in {props.show.FundName}, the returns generated will be taxed at 15% if you redeem before a year (Short Term Capital Gains Tax). However, after 1 year, you will be liable to pay a 10% tax on your Long Term Capital Gains Tax on returns of more than Rs. 1 lakh in a financial year.
    The scheme charges an Exit Load of 1% in case the investments were made for less than a year, so if you need emergency funds you will have to bear the load.<br/>
    <strong>For an example-</strong><br/>If an investor has made a capital gain of ₹50000 on investment in an equity fund, Short Term Capital Gains Tax of 15% would be levied if s/he withdraws the amount within one year of investment, which makes the payable tax to be ₹7500.
    Also, if an investor has made a capital gain of ₹1.5 lakh on investment in an equity fund, and withdraws the amount after 1 year of investment, Long Term Capital Gains Tax of 10% would be levied on ₹50000. ₹1 Lakh is exempted from taxation. The payable tax would be ₹5000.</p> */}
    </div>
    )
}
export default Bottom