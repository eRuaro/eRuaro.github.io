/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Analyzing Weather Patterns for Predicting Floods with Regression Models",
        authors : "Neil Ruaro, Neil So, German Eser, Joshua Bautista",
        conferences : "2022 Annual Senior High School Research Congress: De La Salle University",
        researchYr : 2022,
        citebox : "popup1",
        image : "assets/images/research-page/prediction.png",
        // citation: {
        //     vancouver: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        // },
        abstract: "Weather and flood assessment are known to be of great importance for the early notification of flood disasters worldwide. Therefore, predicting flood risks is crucial to ensuring the safety of the general public from this disaster. Unfortunately, the Philippines continues to be one of the countries severely affected by typhoons every year. This is due to both its geographical location, and its lack of preparation on dealing with flood hazards. Towards prediction improvement, this study identifies the weather patterns involved in three different cities; Makati, Cebu, and Iloilo. One of the main causes of floods is brought upon by heavy rainfall (precipitation). This study also examines the relationship of the different feature variables collected to the hourly precipitation recorded through the Pearson correlation coefficient. Furthermore, the study also uses various machine learning regression methods to predict the mean hourly precipitation in the three different cities mentioned above. Modelling experiments were conducted on weather data recorded during December 2021, with 80% of it used for training, and the remaining 20% used for testing,",
        absbox: "absPopup1"
    },
];
   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    
                </td>
            </tr>`)
        );

        // <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
        //                     BIBTEX
        //                 </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        // <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
        //                 <div class="card-body">
        //                     ${citation.vancouver}    
        //                 </div>
        //             </div>
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

