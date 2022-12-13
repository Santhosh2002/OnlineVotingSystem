function Dashboard_Popup(props) {
  return props.trigger ? (
    <div id="popup" className={props.Step}>
      <div className="popup_icon">
        <i className="bx bx-detail" />
      </div>
      <div className="popup_content">
        <h2>{props.Step}</h2>
        <div className="popup_text">{props.Message}</div>
      </div>
      <div className="dismiss">
        <button className="dismiss_btn">Dismiss</button>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Dashboard_Popup;
