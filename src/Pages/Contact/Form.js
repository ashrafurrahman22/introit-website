import React from 'react';

const Form = () => {
    return (
        <div style={{fontFamily:"Aleo"}} className='min-h-screeen'>
        <div className="lg:hero p-8 rounded-lg">
  <div className="card w-full sm:mx-auto lg:w-full lg:max-w-sm lg:shadow-2xl bg-base-100">
    <div className="card-body">
      <div className="form-control">
       <form>
       <label className="label">
          <span className="label-text">Your Name*</span>
        </label>
        <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered w-full" required />
       <label className="label">
          <span className="label-text">Email*</span>
        </label>
        <input type="email" name="user_email" placeholder="Your Email" className="input input-bordered w-full" required />
       
        <label className="label">
          <span className="label-text">Message*</span>
        </label>
        <textarea required name="message" className='border w-full' placeholder=' Your Message...'  id="" cols="20" rows="5"></textarea>
        <input className='btn btn-primary block w-full' type="submit" value="Submit" />
       </form>
      </div>
    </div>
  </div>
</div>
      </div>
    );
};

export default Form;