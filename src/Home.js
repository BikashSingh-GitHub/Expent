import React, { useState } from 'react';

const Home = () => {
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setQuestion4] = useState('');
  const [question5, setQuestion5] = useState('');
  const [question6, setQuestion6] = useState('');
  const [question7, setQuestion7] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div class="flex flex-row h-screen">
  <div class="flex-none w-48 bg-white-shadow">
    <div class="flex flex-col h-full">
      <div class="p-4 text font">General Information</div>
      <div class="p-4 text font">Security & Privacy</div>
      <div class="p-4 text font">Upload Documents</div>
    </div>
  </div>
  <div class="flex-1 bg-gray-200">
    Main Content Area
  </div>
</div>
    <div className="bg-gray-100 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">General Information</h2>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label htmlFor="question1" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Question 1: Please select your sourcing option
          </label>
          <select
            id="question1"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            value={question1}
            onChange={(e) => setQuestion1(e.target.value)}
            required
          >
            <option value="">Select an option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label htmlFor="question2" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Question 2: Number range of users who will use the product
          </label>
          <input
            type="text"
            id="question2"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            value={question2}
            onChange={(e) => setQuestion2(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label htmlFor="question3" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Question 3: Provide an expected spend
          </label>
          <input
            type="text"
            id="question3"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            value={question3}
            onChange={(e) => setQuestion3(e.target.value)}
            required
          />
        </div>
      </div>
    </div><br></br><br></br><br></br><br></br>
    <div className="bg-gray-200 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Feedback</h2>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label htmlFor="question4" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Question 4: Will you be sharing PII with the vendor?
          </label>
          <div className="flex items-center">
            <label htmlFor="question4-yes" className="mr-4">
              <input
                type="radio"
                id="question4-yes"
                name="question4"
                value="yes"
                className="mr
                < -1"
                required
                />
                <span className="ml-2">No</span>
                </label>
                </div>
                </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label htmlFor="question5" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Question 5: How satisfied are you with the product?
                </label>
                <div className="flex items-center">
                <label htmlFor="question5-1" className="mr-4">
                <input
                           type="radio"
                           id="question5-1"
                           name="question5"
                           value="1"
                           className="mr-2"
                           required
                         />
                <span className="mr-2">1</span>
                </label>
                <label htmlFor="question5-2" className="mr-4">
                <input
                           type="radio"
                           id="question5-2"
                           name="question5"
                           value="2"
                           className="mr-2"
                           required
                         />
                <span className="mr-2">2</span>
                </label>
                <label htmlFor="question5-3" className="mr-4">
                <input
                           type="radio"
                           id="question5-3"
                           name="question5"
                           value="3"
                           className="mr-2"
                           required
                         />
                <span className="mr-2">3</span>
                </label>
                <label htmlFor="question5-4" className="mr-4">
                <input
                           type="radio"
                           id="question5-4"
                           name="question5"
                           value="4"
                           className="mr-2"
                           required
                         />
                <span className="mr-2">4</span>
                </label>
                <label htmlFor="question5-5" className="mr-4">
                <input
                           type="radio"
                           id="question5-5"
                           name="question5"
                           value="5"
                           className="mr-2"
                           required
                         />
                <span className="mr-2">5</span>
                </label>
                </div>
                </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label htmlFor="question6" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Question 6: Would you recommend the product to others?
                </label>
                <div className="flex items-center">
                <label htmlFor="question6-yes" className="mr-4">
                <input
                           type="radio"
                           id="question6-yes"
                           name="question6"
                           value="yes"
                           className="mr-2"
                           required
                         />
                <span className="ml-2">Yes</span>
                </label>
                <label htmlFor="question6-no" className="mr-4">
                <input
                           type="radio"
                           id="question6-no"
                           name="question6"
                           value="no"
                           className="mr-2"
                           required
                         />
                <span className="ml-2">No</span>
                </label>
                </div>
                </div>
                </div></div>
               </form>
      );
}

export default Home;