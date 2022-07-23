const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '010c00a06fmshe1e5186a42f54d0p15d55bjsn4e1bc78c9907',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
};
function valideKey(event){
			const codigo = (event.which) ? event.which : event.keyCode;

      if(codigo >= 45 && codigo <= 57) {
        return true;

      } else {

        return false;
    }
}

window.addEventListener('scroll', () => {
  const buttonUp = document.querySelector('#buttom__up')

  if (scrollY >= 200) {
      buttonUp.style.right = 20 + "px"
  } else {
      buttonUp.style.right = -100 + "px"
  }
})

const fetchIpInfo = async (ip) => {
    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
      .then(res => res.json())
      .catch(err => console.error(err))
  }
  
  const __ = selector => document.querySelector(selector)
  
  const form = __('#formulario')
  const input = __('#caja')
  const submit = __('#buscar')
  const results = __('#resultados')
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = input
    if (!value) return
  
    submit.setAttribute('disabled', '')
    submit.setAttribute('aria-busy', 'true')
  
    const ipInfo = await fetchIpInfo(value)
  
    if (ipInfo) {
      results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }
  
    submit.removeAttribute('disabled')
    submit.removeAttribute('aria-busy')
  
  })