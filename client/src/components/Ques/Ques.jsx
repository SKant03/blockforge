import React, { useState } from 'react';
import up from "../../assets/up-arrow.svg"
import down from "../../assets/down-arrow.svg"

const frequentlyAskQuestions = [
    {
        title: "What documents are required to apply for a subsidy?",
        description: "Required documents vary by program but may include identification, financial statements, tax returns, business plans, and proof of compliance with program requirements."
    },
    {
        title: "How long does it take to process a subsidy application?",
        description: "Processing times can vary widely depending on the program, the complexity of the application, and the volume of applications received. Some programs may take a few weeks, while others could take several months."
    },
    {
        title: "What happens if my subsidy application is denied?",
        description: "If your application is denied, you typically have the option to appeal the decision or reapply after addressing the reasons for denial. Specific appeal processes will depend on the program."
    },
    {
        title: "How will I receive the subsidy funds?",
        description: "Subsidy funds are usually disbursed through direct deposit, checks, or in some cases, as tax credits or deductions."
    },
    {
        title: "Are there restrictions on how I can use the subsidy?",
        description: "Yes, subsidies often come with specific conditions on how the funds must be used. These conditions will be outlined in the subsidy agreement or terms of the grant."
    },
    {
        title: "Do I need to repay a government subsidy?",
        description: "Most subsidies do not need to be repaid as long as you comply with the program's terms and conditions. However, some subsidies, particularly loans, will need to be repaid."
    },
    {
        title: "Where can I find more information about specific subsidies?",
        description: "Detailed information about specific subsidies is usually available on government websites, through local government offices, or via industry-specific organizations."
    },
    {
        title: "Can I get help with my subsidy application?",
        description: "Yes, many governments offer support through helplines, application guides, and workshops. Additionally, you may consult with financial advisors or legal experts who specialize in government subsidies."
    },
    {
        title: "What should I do if I encounter problems during the application process?",
        description: " Contact the relevant government agency or support service for assistance. Many programs also offer FAQs, troubleshooting guides, and customer service teams to help resolve issues."
    },


]

const Ques = () => {

    const [activeId, setActiveId] = useState(null);

    const togglerFunction = (index) => {
        if (activeId === index) {
            setActiveId(null);
        }
        else {
            setActiveId(index);
        }


    };

    return (
        <div className='w-full h-{50rem} py-20 flex justify-center bg-white' >
            <div className='w-[800px] h-max border rounded-lg overflow-hidden'>
                {frequentlyAskQuestions.map((item, i) =>
                    <div key={i} className='border-b last:border-b-0 '>
                        <div className={`px-5 py-4 flex items-center justify-between ${activeId === i ? "bg-gray-100" : ""} `}
                            onClick={() => togglerFunction(i)} >
                            <p className='flex-1'><h4>{item.title}</h4>
                            </p>
                            <span>
                                {
                                    activeId === i ? (<img className='up h-5 w-5' src={up} alt="" />) : (<img className='up h-5 w-5' src={down} alt="" />)
                                }
                            </span>
                        </div>
                        {activeId === i && (
                            <div className='px-5 py-4 flex items-center justify-between'>
                                <p className='flex-1'>{item.description}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Ques;