import { Component, BaseComponent, Tag } from '~/core';
import { container } from '~/app.container';
import { City, ICitiesService, ICitiesServiceId } from '~/shared';
import CityAddComponent from '../shared/city-add/city-add.component';

import Template from './city-list.component.html?style=cities/city-list/city-list.component.css';

@Template
@Tag('city-list')
@Component({
    components: {
        [CityAddComponent.tag]: CityAddComponent
    }
})
export class CityListComponent extends BaseComponent {
    private citiesService: ICitiesService;
    public cities: City[] = null;

    public async created() {
        this.citiesService = container.get<ICitiesService>(ICitiesServiceId);
        
        this.cities = await this.citiesService.get();
    }

    public remove(id: number) {
        this.citiesService.remove(id);
    }
}
