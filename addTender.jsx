import React, { useState } from 'react';

function AddTender() {
  const [formData, setFormData] = useState({
    budget: '',
    duration: '',
    material1Name: '',
    material1Price: '',
    material2Name: '',
    material2Price: ''
  });

  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions((prev) => [...prev, formData]);
    setFormData({
      budget: '',
      duration: '',
      material1Name: '',
      material1Price: '',
      material2Name: '',
      material2Price: ''
    });
  };

  const sortedSubmissions = submissions.sort((a, b) => a.duration - b.duration);

  return (
    <> 
      <div className="grid place-content-center"> 
        <div className="p-6 text-3xl flex"> 
          <div className="avatar avatar-ring-secondary size-40">
            <img src='https://lh3.googleusercontent.com/kLJ-sJyAeopZG6wT3usuXrGx7lFykg_L683arsMJppDuFJ-4fhzsbZ1h38PNyG7PBPU' width={250}/>
          </div>
          <p className='px-6 py-14'>South African Government</p>
        </div>
        <div className="card p-3">
          <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">Please select</h1>
              <p className="text-sm">Sign in to access your account</p>
            </div>
            <div className="form-group">
              <div className="form-field">
                <label className="form-label">Budget R(ZAR)</label>
                <div className="form-control">
                  <input 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Type here" 
                    type="text" 
                    className="input max-w-full" 
                  />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label">Duration/Lead Time (No. of Days)</label>
                <div className="form-control">
                  <input 
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Type here" 
                    type="number" 
                    className="input max-w-full" 
                  />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label">Material 1 Name</label>
                <div className="form-control">
                  <input 
                    name="material1Name"
                    value={formData.material1Name}
                    onChange={handleChange}
                    placeholder="Type here" 
                    type="text" 
                    className="input max-w-full" 
                  />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label">Material 1 Price</label>
                <div className="form-control">
                  <input 
                    name="material1Price"
                    value={formData.material1Price}
                    onChange={handleChange}
                    placeholder="Type here" 
                    type="number" 
                    className="input max-w-full" 
                  />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label">Material 2 Name</label>
                <div className="form-control">
                  <input 
                    name="material2Name"
                    value={formData.material2Name}
                    onChange={handleChange}
                    placeholder="Type here" 
                    type="text" 
                    className="input max-w-full" 
                  />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label">Material 2 Price</label>
                <div className="form-control">
                  <input 
                    name="material2Price"
                    value={formData.material2Price}
                    onChange={handleChange}
                    placeholder="Type here" 
                    type="number" 
                    className="input max-w-full" 
                  />
                </div>
              </div>
              <div className="form-field pt-5">
                <div className="form-control grid place-content-center">
                  <button type="submit" className="btn btn-secondary">Create</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="card p-3">
          <h2 className="text-2xl font-semibold">Submissions</h2>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2">Budget</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Material 1 Name</th>
                <th className="px-4 py-2">Material 1 Price</th>
                <th className="px-4 py-2">Material 2 Name</th>
                <th className="px-4 py-2">Material 2 Price</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {sortedSubmissions.map((submission, index) => {
                const material1Price = parseFloat(submission.material1Price) || 0;
                const material2Price = parseFloat(submission.material2Price) || 0;
                const total = material1Price + material2Price;

                return (
                  <tr key={index}>
                    <td className="border px-4 py-2">{submission.budget}</td>
                    <td className="border px-4 py-2">{submission.duration}</td>
                    <td className="border px-4 py-2">{submission.material1Name}</td>
                    <td className="border px-4 py-2">{material1Price.toFixed(2)}</td>
                    <td className="border px-4 py-2">{submission.material2Name}</td>
                    <td className="border px-4 py-2">{material2Price.toFixed(2)}</td>
                    <td className="border px-4 py-2">{total.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AddTender;
