// Función para mostrar el modal de pedido
function orderDish(dishName) {
    document.getElementById('modalMessage').textContent = `¡Gracias! Tu pedido de ${dishName} ha sido enviado.`;
    document.getElementById('orderModal').classList.remove('hidden');
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('orderModal').classList.add('hidden');
}

// Función para alternar la visibilidad de la receta
function toggleRecipe(recipeId) {
            const recipeContent = document.getElementById(recipeId);
            const icon = document.getElementById(`icon-${recipeId}`);
            
            recipeContent.classList.toggle('open');
            if (recipeContent.classList.contains('open')) {
                icon.textContent = '-';
                icon.classList.add('rotate-180');
            } else {
                icon.textContent = '+';
                icon.classList.remove('rotate-180');
            }
}
