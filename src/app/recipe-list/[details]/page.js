import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiReponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const result = await apiReponse.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

const RecipeDetails = async ({ params }) => {
  const fetchDetails = await fetchRecipeDetails(params?.details);
  return <RecipeDetailsItem getRecipeDetails={fetchDetails} />;
};

export default RecipeDetails;
