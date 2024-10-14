import Link from "next/link";
import { CardContent } from "../ui/card";

const RecipeList = ({ recipeList }) => {
  return (
    <div>
      <div className="p-4 max-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes </h2>
        <Link
          href="/"
          className="cursor-pointer p-2 text-center text-blue-500 font-semibold "
        >
          Go Home
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {recipeList && recipeList?.length > 0
            ? recipeList?.map((items) => (
                <Link href={`/recipe-list/${items?.id}`}>
                  <card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <img
                          src={items.image}
                          alt={items.name}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900">
                          {items.name}
                        </h3>
                        <div className="mt-4 flex items-center flex-wrap gap-2">
                          <p className="text-lg text-gray-600">
                            {items?.rating}
                          </p>
                          <div className="ml-auto">
                            <p className=""> {items.cuisine}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
