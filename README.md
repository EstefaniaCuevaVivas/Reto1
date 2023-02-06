# Reto1
1.  Crear dos ramas en repositorio del reto 1, para ello se ejecuta git branch (nombre de la rama1) y como pide dos vuelvo a ejecutar git branch (nombre de la rama2)
2.  Ejecutar git checkout ( nombre de la rama a la que queremos cambiar ya que estamos en main)

3. He borrado la funcion suma y hemos guardado cambios con git add. , git commit-m"", git push para subirlo a github
4. volvemos a la rama principal con git checkout main y fusionamos con el comando git merge rama1
5. Hemos comprobado el estado con git status y despues una vez todo correcto, ejecutamos git push para subir los cambios a git
6. Volvemos a cambiar de rama a rama2 con checkout rama2
7. Hemos modificado la funcion suma añadiendo un tercer parametro y hemos guardado cambios con git add. , git commit-m"", git push para subirlo a github
8. volvemos a la rama principal con git checkout main y fusionamos con el comando git merge rama2
9. Aparecen dos conflictos de las modificaciones reliazadas en cada rama, los modificamos a traves de git hub y en visual studio resolvemos con editor de combinacion,pulsamos el boton y modificamos o no los conflictos.
10. una vez realizado completamos la fusion mediante combinacion
11. Aparece un mensaje de si se desea la copmbinacion de main.js, completar con conflicto.
