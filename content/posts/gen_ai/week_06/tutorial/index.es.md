---
title: "En Acción: Desmintiendo Mitos de GenAI con Ejemplos Reales"  
date: 2024-11-07  
description: Descubre los mitos más comunes sobre GenAI a través de escenarios prácticos que resaltan sus fortalezas y limitaciones.  
menu:  
  sidebar:  
    name: En Acción - Desmintiendo Mitos de IA  
    identifier: desmintiendo_mitos_ia  
    parent: gen_ia_semana_6  
    weight: 20241107  
hero: hero.webp  
tags: ["Semana 6", "Mitos de GenAI", "Limitaciones de IA", "Ejemplos Prácticos"]  
categories: ["Perspectivas de IA", "Aprendiendo con IA"]  
summary: "Desentraña y desafía las ideas erróneas sobre GenAI con ejemplos prácticos que muestran sus capacidades y sus límites."  
draft: false  
---

<p style="text-align: right;">  
<em>Imagen generada por DALL-E.</em>  
</p>

{{< subscribe-button sub_text="Suscribirme" email_text="Tu correo electrónico" send_text="Enviar" >}}

---

## Explorando Mitos Comunes con Escenarios Prácticos

En el [artículo del lunes](/es/posts/gen_ai/week_06/article/), desmentimos algunos de los mitos más extendidos sobre GenAI. Hoy, pondremos en práctica esos conocimientos con ejemplos específicos que ilustran dónde GenAI puede fallar. Al observar los resultados reales, entenderemos mejor cómo aprovechar sus capacidades y lidiar con sus limitaciones.

{{< vs 3 >}}

### La Herramienta de la Semana: Usar Restricciones para el Resultado

Antes de empezar, destaquemos la herramienta de la semana:

{{< mark >}}Usar Restricciones para el Resultado{{< /mark >}}

Establecer restricciones como límites de palabras, formato específico o el tipo de contenido ayuda a guiar las respuestas de GenAI para que se ajusten a nuestras necesidades particulares. Aunque los resultados no siempre son perfectos, demuestran cómo el usar límites puede modelar los resultados de la GenAI como queramos.

{{< vs 2 >}}

---

{{< vs 2 >}}

### 1. GenAI No Sabe Todo

Intenté pedirle a GenAI información sobre mis trabajos de investigación que etsán en internet, y respondió con un simple “No tengo información sobre eso”. Esto muestra que, aunque GenAI pueda parecer un asistente omnisciente, está limitado por los datos en los que fue entrenado.

{{< copyable >}}
Sin buscar en internet: háblame de un artículo de investigación de Fernando Yánez, candidato doctoral en la Universidad de Toronto.
{{< /copyable >}}

<p style="text-align: right; font-size: 10px;">  
<em>Copia el <b>prompt</b> y pruébalo con <a href="https://chatgpt.com">ChatGPT</a></em>  
</p>

**Resultado**: La IA reconoció sus límites y dejó claro que sus resultados pueden no incluir contenido que no sea ampliamente divulgado, especialmente si no forma parte de sus datos de entrenamiento. (Y por alguna razón decidió cambiarme el apellido).

**Conclusión**: Usa GenAI para obtener información general, pero verifica de forma independiente los detalles sobre temas específicos o trabajos personales.


{{< img src="/posts/shortcodes/week6_tutorial_img_1_es.png" style="max-width: 100%; height: auto;" align="center" title="ChatGPT mostrando falta de conocimiento reciente." >}}


{{< vs 2 >}}

---

{{< vs 2 >}}

### 2. GenAI No Siempre Da la Respuesta Correcta

Incluso después de hacer otra pregunta sobre mis investigaciones antes de octubre de 2023, GenAI no pudo dar una respuesta. Esto muestra que GenAI a veces puede no recuperar información menos conocida, incluso si está disponible públicamente, porque es posible que dichos datos no estén suficientemente representados en el conjunto de datos con el que fue entrenado.

{{< copyable >}}
Sin buscar en la web: entonces, háblame de sus investigaciones antes de octubre de 2023.
{{< /copyable >}}

<p style="text-align: right; font-size: 10px;">  
<em>Copia el <b>prompt</b> y pruébalo con <a href="https://chatgpt.com">ChatGPT</a></em>  
</p>

**Observación**: En este caso, GenAI no pudo proporcionar la información solicitada, lo cual demuestra que, incluso con una amplia base de datos, las respuestas pueden no coincidir con la realidad o los hechos disponibles.

**Conclusión**: Usa las respuestas de GenAI como puntos de partida para explorar más a fondo, no como respuestas definitivas.

{{< img src="/posts/shortcodes/week6_tutorial_img_2_es.png" style="max-width: 100%; height: auto;" align="center" title="ChatGPT no tiene acceso a toda la información antes de su fecha límite de entrenamiento." >}}


{{< vs 2 >}}

---

{{< vs 2 >}}

### 3. El Resultado que dá GenAI es Tan Bueno Como el Prompt

La calidad de la respuesta de GenAI depende de la claridad y el detalle del prompt. Uno genérico puede generar contenido básico, mientras que un prompt detallado orienta a GenAI para que produzca resultados más enfocados y significativos.

**Ejemplo de un prompt genérico**:
{{< copyable >}}
Genera contenido creativo en 100 palabras.
{{< /copyable >}}

<p style="text-align: right; font-size: 10px;">  
<em>Copia el <b>prompt</b> y pruébalo con <a href="https://chatgpt.com">ChatGPT</a></em>  
</p>

**Resultado**: La respuesta suele ser muy general y poco personalizada.


{{< img src="/posts/shortcodes/week6_tutorial_img_3_es.png" style="max-width: 100%; height: auto;" align="center" title="ChatGPT da una respuesta genérica a un prompt sin muchos detalles." >}}


{{< vs 2 >}}

**Ejemplo de un prompt detallado**:
{{< copyable >}}
En 100 palabras, ni más ni menos, crea una historia ambientada en un planeta al revés donde las plantas hablan y los animales son mudos. En este mundo, no hay viento; aun así, las plantas se mueven conscientemente como parte de su lenguaje multimodal. El tercer elemento de este lenguaje es la conexión sináptica entre sus raíces.
{{< /copyable >}}

<p style="text-align: right; font-size: 10px;">  
<em>Copia el <b>prompt</b> y pruébalo con <a href="https://chatgpt.com">ChatGPT</a></em>  
</p>

**Resultado**: Un prompt detallado permite a GenAI crear narrativas más vívidas y precisas.

{{< img src="/posts/shortcodes/week6_tutorial_img_4_es.png" style="max-width: 100%; height: auto;" align="center" title="ChatGPT mejorará su respuesta mientras más detallado sea el prompt." >}}


{{< vs 2 >}}

**Conclusión**: El dar más contexto y detalles en tu prompt eleva la calidad de la respuesta. Invertir tiempo en una instrucción clara y específica nos lleva a resultados más impresionantes.

{{< vs 2 >}}

---

{{< vs 2 >}}

### 4. GenAI No Entiende el Contexto Tan Bien Como los Humanos

En el ejemplo del prompt anterior, mencionamos que las plantas de este mundo ficticio tienen un medio de comunicación multimodal con tres elementos. Describimos explícitamente los aspectos sinápticos y de movimiento, pero el sonido estaba implícito en la frase “un planeta al revés donde las plantas hablan y los animales son mudos”. Para nosotros, es fácil inferir que, a diferencia de los animales mudos, las plantas emiten sonidos. Sin embargo, GenAI mencionó que “los secretos del universo estaban escritos en raíces y movimientos”, enfocándose en solo dos de los tres elementos del lenguaje de esas plantas, destacando su dificultad para reconocer contextos no explícitos.

**Conclusión**: Incluso con prompts detallados, GenAI puede no captar completamente las relaciones complejas o detalles implícitos, subrayando la necesidad de que revisemos sus resultados para asegurar precisión y profundidad.

{{< vs 2 >}}

---

{{< vs 2 >}}

### 5. GenAI No Maneja Todas las Tareas a la Perfección

Añadir restricciones a los prompts pone a prueba la precisión de GenAI. Incluso cuando le di la instrucción precisa de escribir 100 palabras, ni más ni menos, las historias generadas tenían 97 y 99 palabras. Esto muestra que GenAI puede fallar en tareas que requieren el cumplimiento exacto de criterios detallados.

**Conclusión**: Aunque GenAI puede acercarse al objetivo, nuestra supervisión debería garantiza que se cumplan los detalles precisos.

{{< vs 2 >}}

---

{{< vs 2 >}}

### Reflexión sobre la Herramienta de la Semana

El uso de restricciones, como límites de palabras, puede guiar eficazmente a la IA. A pesar de no alcanzar la perfección, se mantuvo dentro del rango general, evitando respuestas demasiado largas. Esto muestra cómo usar restricciones enfoca la producción, incluso si no se logra la perfección.

{{< vs 2 >}}

---

{{< vs 2 >}}

## Reflexiones Finales: Balance, No Perfección

Estos ejemplos demuestran que, aunque nuestro _**Compañero de Ideas**_ es una herramienta poderosa, tiene sus limitaciones. Conocer dónde puede fallar—ya sea en el manejo de instrucciones precisas, la interpretación de prompts complejos o el acceso a información específicos—nos permite usarla de manera más efectiva como un _**Compañero de Ideas**_. Con prompts claros y restricciones bien definidas, el apoyo de GenAI puede ser invaluable, pero la supervisión humana es clave para obtener los mejores resultados.


{{< weekly-button path="/es/posts/gen_ai/week_06/article/" text="Artículo Semanal" >}}