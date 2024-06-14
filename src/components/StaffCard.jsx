function StaffCard({staffName, staffPosition, staffIMG, staffExperience}) {
  return (
    <>
      <div>
        <img src={staffIMG} width="150" height="150" alt="" className="rounded-5" />
        <p className="m-0 text-center fs-5">{staffName}</p>
        <p className="m-0 text-center">{staffPosition}</p>
        <p className="m-0 text-center text-white-50">{staffExperience}</p>
      </div>
    </>
  );

}

export default StaffCard;