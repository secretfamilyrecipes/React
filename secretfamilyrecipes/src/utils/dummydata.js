import {v4 as uuid} from 'uuid';

export const dummydata = [
    {
        title: 'Salmon with Chive Sauce',
        source: 'Favorite Brand Name Cookbook',
        preptime: 10,
        cooktime: 16,
        ingredients: [
            '1/2 cup MIRACLE WHIP',
            '1/4 cup finely chopped fresh chives',
            '2 tbs finely chopped fresh thyme OR',
            '2 tspn dried thyme',
            '2 tbs finely chopped fresh dill OR',
            '2 tspn dill weed',
            '1/4 tspn salt',
            '1/8 tspn pepper',
            '1/4 cup dry white wine or chicken broth',
            '2 salmon steaks'
        ],
        steps: [
            'Mix salad dressing, herbs, salt, and pepper until well blended',
            'Reserve 1/3 cup salad dressing mix to serve later',
            'Stir wine into remaining salad dressing mix',
            'Brush on salmon',
            'Place salmon on grill over hot coals or rack of broiler pan',
            'Grill covered or broil 5-8 mins on each side or until fish flakes easily with fork',
            'Serve with reserved salad dressing mix'
        ],
        id: uuid()
    },
    {
        title: 'Tinted Frosting',
        source: 'Favorite Brand Name Cookbook',
        preptime: 0,
        cooktime: 0,
        ingredients: [
            '1 cup confectioners sugar',
            '2 tbs butter or margarine, softened',
            '1-2  tspn milk',
            'Few drops food color'
        ],
        steps: [
            'In a small bowl, mix sugar, butter, and 1 tbs milk and a few drops of food color',
            'Add more milk if necessary to make frosting more spreadable',
            'Add more sugar if it becomes too runny'
        ],
        id: uuid()
    }
]