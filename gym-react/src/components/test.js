function formatInput(){
    const load = () => {
        const amount = document.getElementById('number')
        amount.addEventListener('input', handleNumberChange)
    }
    const handleNumberChange = (e) => {
        const value = parseInt(e.target.value)
        const upd = document.getElementById('upd')
        upd.innerText
    }
}