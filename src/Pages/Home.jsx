import React from 'react';
import { useLoaderData } from 'react-router';
import HomeCard from '../Components/HomeCard';

const winterCareTips = [
  {
    id: 1,
    title: "Keep Pets Warm",
    desc: "Use warm clothes and blankets during winter."
  },
  {
    id: 2,
    title: "Healthy Food",
    desc: "Give nutritious food to boost immunity."
  },
  {
    id: 3,
    title: "Limit Cold Exposure",
    desc: "Avoid long outdoor stays in cold weather."
  }
];

const expertVets = [
  {
    id: 1,
    name: "Dr. Sarah Khan",
    specialty: "Small Animal Specialist",
    experience: "10 Years"
  },
  {
    id: 2,
    name: "Dr. Arif Rahman",
    specialty: "Veterinary Surgeon",
    experience: "8 Years"
  },
  {
    id: 3,
    name: "Dr. Nusrat Jahan",
    specialty: "Pet Nutrition Expert",
    experience: "6 Years"
  }
];

const Home = () => {
    const data=useLoaderData();
    
    
    return (
        
        
        <div>
           
        <header>
             
<div class="carousel w-full h-96 rounded-xl shadow-lg bg-green-500">


  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://i.ibb.co.com/FbdDRt0s/celine-sayuri-tagami-2s6-ORa-JY6g-I-unsplash.jpg" class="w-full  object-contain rounded-xl" />
    <div class="absolute flex flex-col justify-center left-10 top-1/4 text-white">
      <h2 class="text-4xl font-bold drop-shadow-lg">Cozy Winter Dog</h2>
      <p class="mt-2 text-lg drop-shadow-md">Keeping your furry friend warm and stylish!</p>
    </div>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a>
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div>


  <div id="slide2" class="carousel-item relative w-full">
    <img sizes='20px' src="https://i.ibb.co.com/chrvc0Xt/charlesdeluvio-Mv9hjn-EUHR4-unsplash.jpg" class="w-full object-cover rounded-xl" />
    <div class="absolute flex flex-col justify-center left-10 top-1/4 text-white">
      <h2 class="text-4xl font-bold drop-shadow-lg">Cute Winter Cat</h2>
      <p class="mt-2 text-lg drop-shadow-md">Purrfectly cozy in its sweater!</p>
    </div>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a>
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div>


  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://i.ibb.co.com/rR2t2921/joe-caione-q-O-PIF84-Vxg-unsplash.jpg" class="w-full object-cover rounded-xl" />
    <div class="absolute flex flex-col justify-center left-10 top-1/4 text-white">
      <h2 class="text-4xl font-bold drop-shadow-lg">Festive Pup</h2>
      <p class="mt-2 text-lg drop-shadow-md">Ready for winter festivities!</p>
    </div>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a>
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>

</div>

        </header>
        <main  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6'>
              {
                data.slice(0,6).map((pertCard)=>
                
                    <HomeCard pertCard={pertCard}></HomeCard>
                )
            }
        </main>
          
          <div>
            {/* Winter Care Tips Section */}
<section className="my-12">
  <h2 className="text-3xl font-bold text-center mb-6">
    Winter Care Tips for Pets
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {winterCareTips.map(tip => (
      <div key={tip.id} className="card bg-base-100 shadow-md p-4">
        <h3 className="text-xl font-semibold">{tip.title}</h3>
        <p className="mt-2 text-gray-600">{tip.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* Meet Our Expert Vets Section */}
<section className="my-12">
  <h2 className="text-3xl font-bold text-center mb-6">
    Meet Our Expert Vets
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {expertVets.map(vet => (
      <div key={vet.id} className="card bg-base-100 shadow-md p-4 text-center">
        <h3 className="text-xl font-semibold">{vet.name}</h3>
        <p className="text-green-600">{vet.specialty}</p>
        <p className="text-sm text-gray-500">
          Experience: {vet.experience}
        </p>
      </div>
    ))}
  </div>
</section>

          </div>
        </div>
    );
};

export default Home;