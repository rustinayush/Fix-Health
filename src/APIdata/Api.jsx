const doctorsData = [
  {
    name: "Dr. Ayushi Gupta",
    specialty: "Cardiologist",
    city: "Delhi",
    link: "https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66963.jpg?w=996&t=st=1706092185~exp=1706092785~hmac=de412506ea3818ebd1eaaf8c69ba8a9a9843b96246416f2b3ab5dee871c308b6"
  },
  {
    name: "Dr. Varun Sharma",
    specialty: "Pediatrician",
    city: "Mumbai",
    link: "https://img.freepik.com/premium-photo/portrait-beautiful-mature-doctor-holding-digital-tablet-looking-camera_763111-5731.jpg?w=740"
  },
  {
    name: "Dr. Niyati Patel",
    specialty: "Orthopedic Surgeon",
    city: "Bangalore",
    link: "https://img.freepik.com/free-photo/portrait-doctor_144627-39387.jpg?w=360&t=st=1706097362~exp=1706097962~hmac=373640555f2707d1639b614cd4936f14d8b5f2867db81a9e4c65d79792fb6b3c"
  },
  {
    name: "Dr. Aryan Singh",
    specialty: "Dermatologist",
    city: "Chennai",
    link: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=1024x1024&w=is&k=20&c=eWLlDOBpK-cQh5EAUwgmfr6FR1o3VWPXVVjVMJt9lVo="
  },
  {
    name: "Dr. Priya Shah",
    specialty: "Gynecologist",
    city: "Hyderabad",
    link: "https://img.freepik.com/free-photo/handsome-smiling-medical-professional-examining-with-stethoscope-colored-background_662251-366.jpg?w=740&t=st=1706097400~exp=1706098000~hmac=a96408111e4c12feba8fede368c6657975e6f6d9de1b2c01b513b600d8833801"
  },
  {
    name: "Dr. Rahul Kumar",
    specialty: "Ophthalmologist",
    city: "Kolkata",
    link: "https://img.freepik.com/premium-photo/portrait-happy-successful-hindu-doctor-young-medical-practitioner-smiling-looking_321831-17342.jpg?w=996"
  },
  {
    name: "Dr. Neha Verma",
    specialty: "ENT Specialist",
    city: "Pune",
    link: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=996&t=st=1706097446~exp=1706098046~hmac=57d9b81691401d5c5397687176e8d153494de77c9bd9c3a1546d42d09b2394a6"
  },
  {
    name: "Dr. Sanjay Mishra",
    specialty: "Neurologist",
    city: "Lucknow",
    link: "https://media.istockphoto.com/id/481950293/photo/portrait-of-a-doctor-smiling-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=e-mkv1XmDApc3quc9yyiZro-1BdZ1ZRnmm5aUA70vH4="
  },
  {
    name: "Dr. Ayesha Khan",
    specialty: "Dentist",
    city: "Jaipur",
    link: "https://img.freepik.com/premium-photo/woman-lab-coat-with-stethoscope-her-neck-smiles-camera_926968-45.jpg?w=740"
  },
  {
    name: "Dr. Sameer Desai",
    specialty: "Psychiatrist",
    city: "Ahmedabad",
    link: "https://img.freepik.com/premium-photo/covid-19-coronavirus-outbreak-healthcare-workers-pandemic-concept-middle-aged-doctor-white-coat-cross-arms-chest-ready-help-patients-prescribe-medication-smiling-cheerful_1258-61179.jpg"
  },
  {
    name: "Dr. Meera Reddy",
    specialty: "Endocrinologist",
    city: "Nagpur",
    link: "https://media.istockphoto.com/id/1301595548/photo/female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=5TZmRIrv19xzHJG9DINZYPqxyZh6Ae-0utCXG7J0sGE="
  },
  {
    name: "Dr. Rajiv Kapoor",
    specialty: "Urologist",
    city: "Indore",
    link: "https://img.freepik.com/free-photo/doctors-day-cute-young-handsome-man-lab-coat-glasses-smiling-holding-book_140725-162884.jpg?w=996&t=st=1706097727~exp=1706098327~hmac=4048a46a1495202e00df8dec3ad95bb9ee7773c2ee9a6d7be1980e1bf117e704"
  },
  {
    name: "Dr. Kavita Malhotra",
    specialty: "Pulmonologist",
    city: "Bhopal",
    link: "https://img.freepik.com/premium-photo/portrait-young-asian-woman-doctor-medical-professional-is-smiling-holding-notes-isolated-blue-background_216263-4164.jpg?w=996"
  },
  {
    name: "Dr. Ajay Tiwari",
    specialty: "General Surgeon",
    city: "Patna",
    link: "https://media.istockphoto.com/id/689514338/photo/studio-shot-of-young-bearded-persian-man-doctor-against-gray-background.jpg?s=1024x1024&w=is&k=20&c=vgZGxXPZ6Lgfs7RShcJ4O6CQwlh5scqWLi6radGONvY="
  },
  {
    name: "Dr. Shivani Gupta",
    specialty: "Rheumatologist",
    city: "Chandigarh",
    link: "https://img.freepik.com/free-photo/smiling-young-female-doctor-wearing-medical-robe-with-stethoscope-points-side-isolated-pink-wall-with-copy-space_141793-86994.jpg?w=826&t=st=1706097814~exp=1706098414~hmac=925f6e7e792c514d699bfb260214ff462ecb02f7cd89363b6954b0b50d30a62c"
  },
  {
    name: "Dr. Sunil Joshi",
    specialty: "Gastroenterologist",
    city: "Kochi",
    link: "https://media.istockphoto.com/id/104936413/photo/young-doctor-with-glasses-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=CrjdMF_5WO4dE-UL-xAAkVhkw4s3xtEZUJee-oJ53Lw="
  },
  {
    name: "Dr. Anand Rajan",
    specialty: "Nephrologist",
    city: "Visakhapatnam",
    link: "https://media.istockphoto.com/id/1212177444/photo/happy-male-doctor-of-indian-ethnicity.jpg?s=1024x1024&w=is&k=20&c=XXBY8kyHL2LPuooU2vPBY9dUMzQ_xMHTSkqBMPiyBIk="
  },
  {
    name: "Dr. Anjali Menon",
    specialty: "Oncologist",
    city: "Thiruvananthapuram",
    link: "https://media.istockphoto.com/id/1254545430/photo/portrait-of-a-smiling-young-female-doctor-of-indian-origin.jpg?s=1024x1024&w=is&k=20&c=E_-Fnsout8e5ZMQIM11Nt69RfUXSpItYd8pFF12hmEk="
  },
  {
    name: "Dr. Saurabh Datta",
    specialty: "Allergist",
    city: "Guwahati",
    link: "https://img.freepik.com/premium-photo/male-doctor-light-surface_392895-24691.jpg?w=360"
  },
  {
    name: "Dr. Rajesh sharma",
    specialty: "Hematologist",
    city: "Bhubaneswar",
    link: "https://img.freepik.com/free-photo/young-doctor-getting-ready-work_23-2149393691.jpg?w=360&t=st=1706097910~exp=1706098510~hmac=2251e39e9c35f44c2ac7fec1399b7a8cb09882b0df64009fa4d2253401d89dec"
  }
];


const city_data = [
  "Delhi",
  "Mumbai",
  "Kolkata",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Patna",
  "Chandigarh",
  "Kochi",
  "Visakhapatnam",
  "Thiruvananthapuram",
  "Guwahati"
]

export { doctorsData, city_data };