const pricing = [2999, 5999, 9999, 12999, 4000, 4000, 4000, 4000, 5000, 1500];
const currdate = new Date();
const utc = currdate.getTime() + (currdate.getTimezoneOffset() * 60000);
const nd = new Date(utc + (3600000*+5.5));
const ist =  nd.toLocaleString();
const goToHome = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const goToCourse = () => {
  window.scrollTo({
    top: document.getElementById('courses').offsetTop,
    behavior: 'smooth',
  });
};

const goToHighlights = () => {
  window.scrollTo({
    top: document.getElementById('highlights').offsetTop,
    behavior: 'smooth',
  });
};

const goToContact = () => {
  window.scrollTo({
    top: document.getElementById('contact').offsetTop,
    behavior: 'smooth',
  });
};

const goToWomenEmpowerment = () => {
  window.scrollTo({
    top: document.getElementById('women-empowerment').offsetTop,
    behavior: 'smooth',
  });
};

const goToOnlineFitness = () => {
  window.scrollTo({
    top: document.getElementById('online-fitness').offsetTop,
    behavior: 'smooth',
  });
};
const showPricing = (selectedElement, selectedPricing) => {
  document.querySelectorAll('.pricingTable').forEach((val) => {
    val.classList.add('hidden');
  });
  document.querySelectorAll('.tabs').forEach((val) => {
    val.classList.remove('bg-green-500');
    val.classList.remove('text-white');
  });
  document.getElementById(selectedPricing).classList.remove('hidden');
  document.getElementById(selectedElement).classList.add('bg-green-500');
  document.getElementById(selectedElement).classList.add('text-white');
};

const goToOnlinePricing = () => {
  showPricing('online', 'onlinePricing');
  window.scrollTo({
    top: document.getElementById('online-pricing').offsetTop,
    behavior: 'smooth',
  });
};

const goToWomenEmpowermentPricing = () => {
  showPricing('offline', 'offlinePricing');
  window.scrollTo({
    top: document.getElementById('online-pricing').offsetTop,
    behavior: 'smooth',
  });
};

const registerUser = () => {
  // const transactionId = new Date.now();
  const name = document.getElementById('register_name').value;
  const email = document.getElementById('register_email').value;
  const amount = document.getElementById('register_price').value;
  const mobile = document.getElementById('register_mobile').value;
  const packageId = document.getElementById('register_course').value;

  var options = {
    "key": "rzp_live_VG7ydsteJZrQqm",     
    "amount": amount*100, 
    "currency": "INR",
    "name": "Fitness Club",
    "description": "Test Transaction",
    "handler": function (response) {
       fetch("https://api.apispreadsheets.com/data/9726/", {
         method: "POST",
         body: JSON.stringify({ "data": { "Date": ist, "Name": name, "Email": email, "Amount": amount, "Mobile": mobile, "Package": packageId, "TransactionId": response.razorpay_payment_id } }),
       }).then(res => {
         if (res.status === 201) {
           alert('Package Booked Successfully');
         }
         else {
           // ERROR
           alert('Something Went Wrong, Please consult admin for any concern');
         }
       })
    },
    "prefill": {
      "name": name,
      "email": email,
      "contact": mobile
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#53b982"
    }
  };
  var rzp1 = new Razorpay(options); rzp1.on('payment.failed', function (response) {
    // alert(response.error.code);
    // alert(response.error.description);
    // alert(response.error.source);
    // alert(response.error.step);
    // alert(response.error.reason);
    // alert(response.error.metadata.order_id);
    // alert(response.error.metadata.payment_id);
  });
  rzp1.open();
  return false;
}

const queryForm = () => {
  const queryButton = document.getElementById('queryButton');
  const loadingQuery = document.getElementById('loadingQuery');
  queryButton.disabled = true;
  queryButton.classList.remove('bg-green-500');
  queryButton.classList.add('bg-green-200');
  loadingQuery.classList.remove('hidden');

  fetch("https://api.apispreadsheets.com/data/9874/", {
    method: "POST",
    body: JSON.stringify({ "data": { "Name": document.getElementById('name').value, "Mobile": document.getElementById('mobile').value, "Message": document.getElementById('message').value } }),
  }).then(res => {
    if (res.status === 201) {
      // SUCCESS
      alert('Your Query is placed Successfully');
      document.getElementById('name').value = "";
      document.getElementById('mobile').value = "";
      document.getElementById('message').value = "";
    }
    else {
      // ERROR
      alert('Something Went wrong please try again after some time');
    }
  }).finally(() => {
    document.getElementById('queryButton').disabled = false;
    queryButton.classList.remove('bg-green-200');
    queryButton.classList.add('bg-green-500');
    loadingQuery.classList.add('hidden');
  })
  return false;
}

const modal_overlay = document.querySelector('#modal_overlay');
const modal = document.querySelector('#modal');

function openModal(value) {
  const modalCl = modal.classList
  const overlayCl = modal_overlay

  if (value) {
    overlayCl.classList.remove('hidden')
    setTimeout(() => {
      modalCl.remove('opacity-0')
      modalCl.remove('-translate-y-full')
      modalCl.remove('scale-150')
    }, 100);
  } else {
    modalCl.add('-translate-y-full')
    setTimeout(() => {
      modalCl.add('opacity-0')
      modalCl.add('scale-150')
    }, 100);
    setTimeout(() => overlayCl.classList.add('hidden'), 300);
  }
}

const proceedRegistration = (id) => {
  document.getElementById('register_course').value = id;
  document.getElementById('register_price').value = pricing[id - 1];
  document.getElementById('payment').disabled = false;
  openModal(true);
}

const selectCourse = (value) => {
  if (Number(value) === 0 || isNaN(Number(value))) {
    alert('Please Select a course');
    document.getElementById('payment').disabled = true;
  } else {
    document.getElementById('payment').disabled = false;
    document.getElementById('register_price').value = pricing[value - 1];
  }
}
