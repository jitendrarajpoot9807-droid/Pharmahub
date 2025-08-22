// Dashboard auto-scaling
(function(){
    const root = getComputedStyle(document.documentElement);
    const BASE_W = parseFloat(root.getPropertyValue('--base-w')) || 1260;
    const BASE_H = parseFloat(root.getPropertyValue('--base-h')) || 550;
  
    const viewport = document.getElementById('viewport');
    const board    = document.getElementById('board');
  
    function fit(){
      const availW = viewport.clientWidth;
      const availH = viewport.clientHeight;
      const scale = Math.min(availW / BASE_W, availH / BASE_H);
      const scaledW = BASE_W * scale;
      const scaledH = BASE_H * scale;
      board.style.transform = `scale(${scale})`;
      board.style.left = `${(availW - scaledW) / 2}px`;
      board.style.top  = `${(availH - scaledH) / 2}px`;
    }
    window.addEventListener('resize', fit, {passive:true});
    new ResizeObserver(fit).observe(viewport);
    fit();
  })();
  
  // BMI Calculator
  function calculateBMI(){
    let w = +document.getElementById("bmiWeight").value;
    let h = +document.getElementById("bmiHeight").value / 100;
    if(w>0 && h>0){
      let bmi = (w/(h*h)).toFixed(2);
      document.getElementById("bmiResult").textContent = `Your BMI: ${bmi}`;
    }
  }
  
  // Drug Dose Calculator
  function calculateDose(){
    let w = +document.getElementById("weight").value;
    let dpk = +document.getElementById("dosePerKg").value;
    if(w>0 && dpk>0){
      let dose = (w*dpk).toFixed(2);
      document.getElementById("doseResult").textContent = `Dose: ${dose} mg`;
    }
  }
  
  // CGPA Converter
  function calcCGPA(){
    let cgpa = +document.getElementById("cgpa").value;
    if(cgpa>0){
      let perc = (cgpa*9.5).toFixed(2);
      document.getElementById("cgpaResult").textContent = `Percentage: ${perc}%`;
    }
  }
  