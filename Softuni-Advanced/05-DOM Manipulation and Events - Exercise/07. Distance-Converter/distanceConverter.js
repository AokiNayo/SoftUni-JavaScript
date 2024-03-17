function attachEventsListeners() {
    document.querySelector('#convert').addEventListener('click', () => {

        const inputValue = Number(document.querySelector('#inputDistance').value)

        const convertFrom = Array.from(document.querySelector('#inputUnits').children).find(x => x.selected).value
        const convertTo = Array.from(document.querySelector('#outputUnits').children).find(x => x.selected).value

        // const convertFrom = document.getElementById('inputUnits').value;
        // const convertTo = document.getElementById('outputUnits').value;

        const units = { km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yrd: 0.9144, ft: 0.3048, in: 0.0254 };

        document.querySelector('#outputDistance').value = inputValue * units[convertFrom] / units[convertTo]
    })

}