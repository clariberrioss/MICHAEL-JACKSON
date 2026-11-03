# ¡NO AGARRES EL CELULAR MIENTRAS ESTUDIAS!
## Detector de celular🕺📱

Solo una idea no terminada pero implementada je

¿Muy pegada al celular mientras estudiás? Este programa te vigila con la webcam y, apenas agarrás el teléfono, 
te llena la pantalla de fotos de Michael Jackson con su sonido característico. 
Un recordatorio bastante difícil de ignorar.

## ¿Cómo funciona?
1. Al tocar **Empezar**, la página pide permiso para usar la cámara y muestra lo que ve en el `<video>`.
2. Un modelo de inteligencia artificial (COCO-SSD, de TensorFlow.js) analiza ese video unas tres veces por segundo y devuelve una lista de los objetos que reconoce.
3. Si en esa lista aparece un `cell phone` con más de 50% de seguridad, y pasaron al menos 5 segundos desde la última vez, se disparan las imágenes.
4. El "show" reproduce el sonido y hace aparecer 8 fotos, una cada 0,4 segundos, en posiciones al azar. Cada una desaparece a los 4 segundos.

Todo se procesa en la computadora: el video no se sube a ningún lado.

## Tecnologías
- HTML
- CSS
- JavaScript
- [TensorFlow.js](https://www.npmjs.com/package/@tensorflow/tfjs) + [COCO-SSD](https://www.npmjs.com/package/@tensorflow-models/coco-ssd)


## Este fue mi proyecto para aprender JavaScript de una forma más divertida. Practiqué:

- Eventos (`onclick`) y funciones.
- Bucles (`for`) y condicionales (`if`).
- Tiempos con `setTimeout` y `Date.now()`.
- Crear elementos HTML desde JavaScript.
- Acceso a la cámara con `getUserMedia`.
- Usar un modelo de IA ya entrenado.
