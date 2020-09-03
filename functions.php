<?php

function planos_add_local_field_groups() {
	$page = get_page_by_path('Planos');

	// Create page if it doesnt exist
	if (!$page) {
		$page = get_page(
			wp_insert_post([
				'post_title'    => 'Planos',
				'post_type'			=> 'page',
				'post_content'  => '',
				'post_status'   => 'publish',
			], true)
		);
	}

	// Create fields
	acf_add_local_field_group([
		'key' => 'ci_planos',
		'title' => 'Faixas',
		'fields' => [
			[
				'key'          => 'ci_planos_items_men',
				'label'        => 'Mensal',
				'name'         => 'mensal',
				'type'         => 'repeater',
				'sub_fields'   => [
					[
						'key'   => 'ci_planos_mental_title',
						'label' => 'Título',
						'name'  => 'titlemensal',
						'type'  => 'text',
					],
					[
						'key'   => 'ci_planos_mental_descricao',
						'label' => 'Descrição',
						'name'  => 'description',
						'type'  => 'textarea',
					],
					[
						'key'   => 'ci_planos_mental_preco',
						'label' => 'Preço',
						'name'  => 'preco',
						'type'  => 'text',
					],
				],
				'button_label' => 'Adicionar',
				'min'          => '',
				'max'          => '',
			],


			[
				'key'          => 'ci_planos_items_tri',
				'label'        => 'Trimestral',
				'name'         => 'trimestral',
				'type'         => 'repeater',
				'sub_fields'   => [
					[
						'key'   => 'ci_planos_trimestral_title',
						'label' => 'Título',
						'name'  => 'titletrimestral',
						'type'  => 'text',
					],
					[
						'key'   => 'ci_planos_trimestral_descricao',
						'label' => 'Descrição',
						'name'  => 'description',
						'type'  => 'textarea',
					],
					[
						'key'   => 'ci_planos_trimestral_preco',
						'label' => 'Preço',
						'name'  => 'preco',
						'type'  => 'text',
					],
				],
				'button_label' => 'Adicionar',
				'min'          => '',
				'max'          => '',
			],

		],
		'location' => [
			[
				[
					'param' => 'page',
					'operator' => '==',
					'value' => $page->ID,
				],
			],
		],
	]);
}

function clientes_add_local_field_groups() {
	$page = get_page_by_path('clientes');

	// Create page if it doesnt exist
	if (!$page) {
		$page = get_page(
			wp_insert_post([
				'post_title'    => 'Depoimentos Clientes',
				'post_type'			=> 'page',
				'post_content'  => '',
				'post_status'   => 'publish',
			], true)
		);
	}

	// Create fields
	acf_add_local_field_group([
		'key' => 'ci_clientes',
		'title' => 'Depoimentos',
		'fields' => [
			[
				'key'          => 'ci_clientes_items',
				'name'         => 'items',
				'type'         => 'repeater',
				'sub_fields'   => [
					[
						'key'   => 'ci_clientes_title',
						'label' => 'Título',
						'name'  => 'title',
						'type'  => 'text',
					],
					[
						'key'   => 'ci_clientes_content',
						'label' => 'Descrição',
						'name'  => 'description',
						'type'  => 'textarea',
					],
				],
				'button_label' => 'Adicionar',
				'min'          => '',
				'max'          => '',
			],
		],
		'location' => [
			[
				[
					'param' => 'page',
					'operator' => '==',
					'value' => $page->ID,
				],
			],
		],
	]);
}

function apps_add_local_field_groups() {
	$page = get_page_by_path('solutions');

	// Create page if it doesnt exist
	if (!$page) {
		$page = get_page(
			wp_insert_post([
				'post_title'    => 'Solutions',
				'post_type'			=> 'page',
				'post_content'  => '',
				'post_status'   => 'publish',
			], true)
		);
	}

	// Create fields
	acf_add_local_field_group([
		'key' => 'ci_solutions',
		'title' => 'Soluções',
		'fields' => [
			[
				'key'          => 'ci_solutions_items',
				'name'         => 'items',
				'type'         => 'repeater',
				'sub_fields'   => [
					[
						'key'   => 'ci_solutions_title',
						'label' => 'Tĩtulo',
						'name'  => 'title',
						'type'  => 'text',
					],
					[
						'key'   => 'ci_solutions_icon',
						'label' => 'Ícone',
						'name'  => 'icon',
						'type'  => 'file',
					],
					[
						'key'   => 'ci_solutions_content',
						'label' => 'Descrição',
						'name'  => 'content',
						'type'  => 'textarea',
					],
				],
				'button_label' => 'Adicionar',
				'min'          => '',
				'max'          => '',
			],
		],
		'location' => [
			[
				[
					'param' => 'page',
					'operator' => '==',
					'value' => $page->ID,
				],
			],
		],
	]);
}
// Apps page custom fields
function solutions_add_local_field_groups() {
	$page = get_page_by_path('apps');

	// Create page if it doesnt exist
	if (!$page) {
		$page = get_page(
			wp_insert_post([
				'post_title'    => 'Apps',
				'post_type'			=> 'page',
				'post_content'  => '',
				'post_status'   => 'publish',
			], true)
		);
	}

	// Create fields
	acf_add_local_field_group([
		'key' => 'ci_apps',
		'title' => 'Dobras',
		'fields' => [
			[
				'key'          => 'ci_apps_item',
				'name'         => 'items',
				'type'         => 'repeater',
				'sub_fields'   => [
					[
						'key'   => 'ci_apps_first_brand',
						'label' => 'Primeira Marca',
						'name'  => 'first_brand',
						'type'  => 'file',
					],
					[
						'key'   => 'application__tit',
						'label' => 'Titulo',
						'name'  => 'descri',
						'type'  => 'text',
					],
					[
						'key'   => 'ci_apps_content',
						'label' => 'Descrição',
						'name'  => 'content',
						'type'  => 'textarea',
					],					
				],
				'button_label' => 'Adicionar',
				'min'          => '',
				'max'          => '',
			],
		],
		'location' => [
			[
				[
					'param' => 'page',
					'operator' => '==',
					'value' => $page->ID,
				],
			],
		],
	]);
}

// /wp/v2/menu - Main menu
function menu_route_callback($response) {
	$menu = wp_get_nav_menu_object('main');
	return wp_get_nav_menu_items($menu->term_id);
}

function create_main_menu() {
	// Check if the menu exists
	$menu_name = 'Main';
	$menu_exists = wp_get_nav_menu_object($menu_name);

	// If it doesn't exist, let's create it.
	if(!$menu_exists){
		$menu_id = wp_create_nav_menu($menu_name);

		wp_update_nav_menu_item($menu_id, 0, [
			'menu-item-title' =>  'Sobre',
			'menu-item-url' => '/sobre',
			'menu-item-status' => 'publish'
		]);
	}
}

// Exposes ACF object to Rest API
function wp_api_encode_acf($data, $post, $context){
	$data['meta'] = array_merge(
		$data['meta'],
		get_fields($post['ID'])
	);

	return $data;
}

// Only set fields if ACF is enabled
if(function_exists('get_fields'))
	add_filter('json_prepare_post', 'wp_api_encode_acf', 10, 3);

// Register hooks
add_action('init', 'create_main_menu');
// add_action('acf/init', 'clientes_add_local_field_groups');
// add_action('acf/init', 'solutions_add_local_field_groups');
// add_action('acf/init', 'apps_add_local_field_groups');
// add_action('acf/init', 'planos_add_local_field_groups');
// Custom routes
add_action('rest_api_init', function () {
	// Menus route
	register_rest_route('wp/v2', '/menu', [
		'methods' => 'GET',
		'callback' => 'menu_route_callback',
	]);
});

// enviar pro item post da restapi, os campos custom q quiser

function prepare_rest($data, $post, $request){
	
	$_data = $data->data;

	// pegando as thumbnails
	$thumbnail_id = get_post_thumbnail_id($post->ID);
	$thumbnail300x180 = wp_get_attachment_image_src($thumbnail_id, '300x200');

	// pegando as categorias
	$cats = get_the_category($post->ID);

	//pegando as tags
	$tagging = get_the_tags($post->ID);
	

	// get the post object
	$post = get_post( get_the_ID() );
	// we need just the content
	$content = $post->post_content;
	// we need a expression to match things
	$regex = '/src="([^"]*)"/';
	// we want all matches
	preg_match_all( $regex, $content, $matches );
	// reversing the matches array
	$matches = array_reverse($matches);

	//send to rest API
	$_data['fi_300x180'] = $thumbnail300x180[0];
	$_data['cats'] = $cats;
	$_data['firstimg'] = $matches[0];
	$_data['TAGGING'] = $tagging;
	
	$data->data = $_data;

	return $data;
}

add_filter('rest_prepare_post', 'prepare_rest', 10, 3 );