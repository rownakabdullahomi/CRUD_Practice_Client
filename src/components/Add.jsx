const Add = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const info = { name, email };
    // console.log(info);

    fetch("http://localhost:5000/addUser",{
        method: "POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(info)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

  };

  return (
    <div className="flex justify-center m-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleAddUser} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <input type="submit" value="Add User" className="btn btn-neutral" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
