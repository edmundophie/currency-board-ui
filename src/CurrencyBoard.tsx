import React from 'react';
import './CurrencyBoard.css';
import api from './api';
import LoadingImage from './loading.svg';

class CurrencyBoard extends React.Component<{}, { rateAmount: number | null, lastUpdateDateTime: number | null, isLoading: boolean }> {
  constructor(props: number) {
    super(props);
    this.state = {
      rateAmount: null,
      lastUpdateDateTime: null,
      isLoading: true
    }
  }

  componentDidMount() {
    var $this = this;
    api.getRate().then(function (data: { rate: number, lastUpdatedDate: number }) {
      $this.setState({
        rateAmount: data.rate,
        lastUpdateDateTime: data.lastUpdatedDate
      })
    }).finally(function() {
      $this.setState({isLoading: false});
    });
  }

  getFormattedDateTime() {
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];

    if (this.state.lastUpdateDateTime == null) {
      return "unknown";
    }

    function getTimezoneOffset() {
      function z(n: number) { return (n < 10 ? '0' : '') + n }
      var offset = new Date().getTimezoneOffset();
      var sign = offset < 0 ? '+' : '-';
      offset = Math.abs(offset);
      return 'GMT' + sign + z(offset / 60 | 0) + z(offset % 60);
    }

    var date = new Date(this.state.lastUpdateDateTime * 1000);

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours() + "";
    var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes() + "";;

    return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ':' + min + ' ' + getTimezoneOffset();
  }

  render() {
    var loadingStyle = {
      display: this.state.isLoading?"inline":"none"
    }

    var rateTextStyle = {
      display: this.state.isLoading?"none":"block"
    }

    return (
      <div id="board">
        <div id="inner">
          <h3>Currency Rate</h3>
          <div id="rateBox">
            <div className="rateText" style={rateTextStyle}>
              USD 1 = <strong id="rateAmount">IDR {this.state.rateAmount}</strong>
            </div>
            <img className="rate__loading" src={LoadingImage} style={loadingStyle} alt=""></img>
          </div>
          <br />
          <div style={rateTextStyle}><small><em>Last updated on {this.getFormattedDateTime()}</em></small></div>
        </div>
        <div><small><em>Maintained by <a href="http://ophie.io">ophie.io</a></em></small></div>
      </div>
    );
  }
}

export default CurrencyBoard;
