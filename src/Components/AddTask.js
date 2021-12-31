import React from 'react';

const AddTask = () => {
	return (
		<form className="add-form">
			<div className="form-control">
				<label>وظیفه</label>
				<input type="text" placeholder="اضافه کردن وظیفه" />
			</div>
			<div className="form-control">
				<label>روز</label>
				<input type="text" placeholder="اضافه کردن روز" />
			</div>
			<div className="form-control form-control-check">
				<label>اضافه کردن یادآور</label>
				<input type="checkbox" />
			</div>

			<input type="submit" value="ذخیره کردن وظیفه" className="btn btn-block" />
		</form>
	);
};

export default AddTask;
