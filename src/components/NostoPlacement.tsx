/**
 * @group Components
 */
export type NostoPlacementProps = { id: string; pageType?: string }

/**
 * Nosto React has a special component called NostoPlacement.
 * The component is a simply a hidden `<div>` placeholder into which Nosto injects recommendations or personalises the content between the tags.
 *
 * We recommend adding as many placements across your views as needed as these are hidden and only populated when a corresponding campaign (targeting that placement) is configured.
 *
 * @example
 * ```
 * <NostoPlacement id="frontpage-nosto-1" />
 * ```
 *
 * @group Components
 */
export default function NostoPlacement(props: NostoPlacementProps) {
  const { id, pageType } = props
  return <div className="nosto_element" id={id} key={id + (pageType || "")} />
}
