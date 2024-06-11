document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('mousedown', startDrag);

    let offsetX, offsetY;

    function getCirclePosition(circleId) {
        const circle = document.getElementById(circleId);
        const rect = circle.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    }
    
    function calculateDistance(pos1, pos2) {
        const dx = pos2.x - pos1.x;
        const dy = pos2.y - pos1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function startDrag(e) {
        offsetX = e.clientX - circle.getBoundingClientRect().left;
        offsetY = e.clientY - circle.getBoundingClientRect().top;
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    }

    function pxToMm(pxDistance) {
        return pxDistance / 2.5
    }

    function drag(e) {
        circle.style.left = e.clientX - offsetX + 'px';
        circle.style.top = e.clientY - offsetY + 'px';
    }
    
    function stopDrag() {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
        console.log(`Circle ${circle.id} Position: (${circle.style.left}, ${circle.style.top})`);

        const pos1 = getCirclePosition('circle1');
        const pos2 = getCirclePosition('circle2');
        const distance1to2 = calculateDistance(pos1, pos2);
        console.log(`Stulp: ${pxToMm(distance1to2)}mm`);
        document.getElementById('distance1to2').innerText = pxToMm(distance1to2).toFixed(2);

    
        const pos4 = getCirclePosition('circle4');
        const pos5 = getCirclePosition('circle5');
        const distance4to5 = calculateDistance(pos4, pos5);
        console.log(`Entfernungsmaß: ${pxToMm(distance4to5)}mm`);
        document.getElementById('distance4to5').innerText = pxToMm(distance4to5).toFixed(2);

        // Provisorische Einstecktiefe
        const pos3 = getCirclePosition('circle3');
        pos3constx = pos2;
        pos3constx.y = pos2.y;
        const distanceEinsteck = calculateDistance(pos3, pos3constx);
        console.log(`Einstecktiefe: ${pxToMm(distanceEinsteck)}mm`);
        document.getElementById('distance3to1_2').innerText = pxToMm(distanceEinsteck).toFixed(2);

        // Provisorisches Dornmaß
        const distanceDorn = pos4.x-pos2.x
        document.getElementById('distanceDorn').innerText = pxToMm(distanceDorn).toFixed(2);
    }
    



});