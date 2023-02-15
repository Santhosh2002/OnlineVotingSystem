const Dashboard_Popup = (props) => {
  document.getElementById("pop-dismiss").addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.add("active");
  });
  return (
    <>
      <div className="popup center">
        <div className="icon">
          <i class="bx bx-detail"></i>
        </div>
        <div className="pop_title">{props.Step}</div>
        <div className="pop_description">{props.Description}</div>
        <div className="dismiss_btn">
          <button id="pop-dismiss"></button>
        </div>
      </div>
    </>
  );
};
export default Dashboard_Popup;
