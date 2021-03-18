import React, { useEffect } from "react";
import TableRow from "./TableRow";
import "./table.css";
// redux ----
import { fetchAllCoinData } from "../../Actions/allCoinDataAction";
import { connect } from "react-redux";
// Numeral -----
import numeral from "numeral";
import { animateScroll } from "react-scroll";

const Table = ({ allCoinData, fetchAllCoinData }) => {
  useEffect(() => {
    fetchAllCoinData();
  }, []);
  return (
    <table className="table">
      <tr className="table-header">
        <th className="table-column">#</th>
        <th className="table-column">Name</th>
        <th className="table-column">Symbol</th>
        <th className="table-column">Price</th>
        <th className="table-column"> 24hr High</th>
        <th className="table-column"> 24hr Low</th>
        <th className="table-column"> 24hr Change %</th>
        <th className="table-column">Total Supply</th>
        <th className="table-column">Total Volume</th>
      </tr>
      {allCoinData.map((coin) => {
        return (
          <TableRow
            rank={coin.market_cap_rank}
            name={coin.name}
            image={coin.image}
            price={numeral(coin.current_price).format("0,0")}
            low={numeral(coin.low_24h).format("0,0")}
            high={numeral(coin.high_24h).format("0,0")}
            priceChange={coin.price_change_24h}
            totalSupply={numeral(coin.total_supply).format("0,0a")}
            totalVolumn={numeral(coin.total_volume).format("0,0a")}
          />
        );
      })}
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    allCoinData: state.allCoinData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCoinData: () => dispatch(fetchAllCoinData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
